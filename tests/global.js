import '../global.js'
import chai from 'chai'

const expect = chai.expect

describe('Extendash global access', function () {
	it('should be true', function (done) {
		expect(!!_).to.be.true
		done()
	})
})
