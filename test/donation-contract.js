/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { DonationContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logging = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('DonationContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new DonationContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"donation 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"donation 1002 value"}'));
    });

    describe('#donationExists', () => {

        it('should return true for a donation', async () => {
            await contract.donationExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a donation that does not exist', async () => {
            await contract.donationExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createDonation', () => {

        it('should create a donation', async () => {
            await contract.createDonation(ctx, '1003', 'donation 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"donation 1003 value"}'));
        });

        it('should throw an error for a donation that already exists', async () => {
            await contract.createDonation(ctx, '1001', 'myvalue').should.be.rejectedWith(/The donation 1001 already exists/);
        });

    });

    describe('#readDonation', () => {

        it('should return a donation', async () => {
            await contract.readDonation(ctx, '1001').should.eventually.deep.equal({ value: 'donation 1001 value' });
        });

        it('should throw an error for a donation that does not exist', async () => {
            await contract.readDonation(ctx, '1003').should.be.rejectedWith(/The donation 1003 does not exist/);
        });

    });

    describe('#updateDonation', () => {

        it('should update a donation', async () => {
            await contract.updateDonation(ctx, '1001', 'donation 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"donation 1001 new value"}'));
        });

        it('should throw an error for a donation that does not exist', async () => {
            await contract.updateDonation(ctx, '1003', 'donation 1003 new value').should.be.rejectedWith(/The donation 1003 does not exist/);
        });

    });

    describe('#deleteDonation', () => {

        it('should delete a donation', async () => {
            await contract.deleteDonation(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a donation that does not exist', async () => {
            await contract.deleteDonation(ctx, '1003').should.be.rejectedWith(/The donation 1003 does not exist/);
        });

    });

});