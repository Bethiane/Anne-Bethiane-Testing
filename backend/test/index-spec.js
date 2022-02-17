const {Transaction} = require('../../mongodb/model');
const mongoose = require('mongoose');
const calculator = require("../app/utils/calculator");


describe("App Controller", () => {
    it('/ (GET)', () => {
        return request(app.getHttpServer())
          .get('/')
          .expect(200)
          .expect('Hello e-Power!');
      });
})

describe("Calculator function", () => {
    it("Should return zero for empty data", () => {
        expect(adder()).toEqual(0);
    });

});

describe("Transaction", () => {
    it('should create transaction', async () => {
        await createTransaction(mockTransaction.dateExp,mockTransaction.status);
        const insertedTransaction = await Transaction.findOne({dateExp: mockTransaction.dateExp});
        expect(insertedTransaction.dateExp).toEqual(mockTransaction.status);
      });
})