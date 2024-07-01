const midtransClient = require('midtrans-client');
const {v4: uuidv4} = require('uuid')
let core = new midtransClient.CoreApi({
    isProduction : false,
    serverKey : 'SB-Mid-server-ZtkJZhW-5tr1HLuVZhI2T9bq',
    clientKey : 'SB-Mid-client-DeXquP5DpX1dOBBx'
});

const pay = (req, res, next)=>{
    const {total, payment_type, bank} = req.body
   

    let parameter = {
        "payment_type": payment_type,
        ...(payment_type === 'bank_transfer' ? {bank_transfer:{bank }}:{}),
        "transaction_details": {
            "gross_amount": total,
            "order_id": uuidv4(),
        },
 
    };

    console.log(parameter);
    core.charge(parameter)
    .then((chargeResponse)=>{
        console.log('chargeResponse:');
        console.log(chargeResponse);
        res.json({
            data: chargeResponse
        })
    });

}

const checkStatus = (req, res, next)=>{
    const id = req.params.id
    core.transaction.status(id)
    .then((response)=>{
        // do something to `response` object
        res.json({
            data: response
        })
    });
}

module.exports = {
    pay,
    checkStatus
}