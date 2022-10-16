import '../index.js'
import chai from 'chai'

const expect = chai.expect

describe('Extendash access', function () {
	describe('Lodash access', function () {
		describe('_.merge is exists', function () {
			it('should be true', function (done) {
				expect(!!_.merge).to.be.true
				done()
			})
		})
	})
	describe('Deepdash access', function () {
		describe('_.filterDeep is exists', function () {
			it('should be true', function (done) {
				expect(!!_.filterDeep).to.be.true
				done()
			})
		})
	})
})
