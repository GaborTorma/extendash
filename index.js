import lodash from 'lodash'
import deepdash from 'deepdash'

const _ = deepdash(lodash)

_.pickByDeep = (obj, predicate, options) => {
	return _.filterDeep(
		obj,
		(v, k, p, c) => !!predicate(v, k, p, c) || undefined,
		_.merge(
			{
				leavesOnly: false,
				checkCircular: true,
				cloneDeep: (v) => (_.isFunction(v) ? v : _.cloneDeep(v)),
			},
			options
		)
	)
}

_.omitByDeep = (obj, predicate, options) => {
	return _.filterDeep(
		obj,
		(v, k, p, c) => !predicate(v, k, p, c),
		_.merge(
			{
				leavesOnly: false,
				checkCircular: true,
				cloneDeep: (v) => (_.isFunction(v) ? v : _.cloneDeep(v)),
				// cloneDeep: (v) => _.cloneDeepWith(v, (v) => (_.isFunction(v) && v) || undefined),
				onTrue: { skipChildren: false },
			},
			options
		)
	)
}

const truncateOptions = {
	size: 3,
	total: true,
	immutable: true,
}

_.truncateArray = (arr, options = truncateOptions) => {
	if (_.isArray(arr) && _.size(arr) > options.size) {
		const truncated = arr.slice(0, options.size - 1)
		return options.total ? truncated.concat(`...total: ${_.size(arr)}'`) : truncated
	}
	return arr
}

_.truncateArrayDeep = (obj, options = truncateOptions) => {
	if (obj) {
		if (options.immutable) {
			obj = _.cloneDeep(obj)
		}
		return _.eachDeep(obj, (v, k, p) => {
			if (_.isArray(v)) {
				p[k] = _.truncateArray(v, options)
			}
		})
	}
	return obj
}

_.isNonEmptyString = (value) => {
	return _.isString(value) && value !== ''
}

_.isNotDefined = (value) => {
	return _.isUndefined(value) || _.isNaN(value) || value === null
}

_.isDefined = (value) => {
	return !_.isNotDefined(value)
}

_.isInteresting = (value) => {
	return (
		_.isDefined(value) &&
		((!_.isString(value) && !_.isPlainObject(value) && !_.isArray(value)) || _.size(value))
	)
}

_.isNotInteresting = (value) => {
	return !_.isInteresting(value)
}

_.ifNotDefined = (value, defVal, self = true) => {
	return _.isNotDefined(value) ? defVal : self ? value : undefined
}

_.isTrue = (value) => {
	return value === true || value === 'true'
}

_.isFalse = (value) => {
	return value === false || value === 'false'
}

_.isDateValid = (value) => {
	const date = new Date(value)
	return Object.prototype.toString.call(date) === '[object Date]' && !_.isNaN(date.getTime())
}

export default _
