import CommunicationController from "../model/CommunicationController";


export async function fetchData(oid) {

    let order = undefined
    try {
        order = await CommunicationController.getOrder(oid)
    } catch (error) {
        console.error("error during get object date request", error)
        
        
    }
   

    let status = order.status;



        console.log('status', status);


if (status === "COMPLETED") {
  return "book was delivered";

} 

  let data = undefined
    try {
        data = await CommunicationController.getObjectDeliveryDate(oid)
    } catch (error) {
        console.error("error during get object date request", error)
        
    }
   

    let deliveryDate = data.date;
    console.log('deliveryDate', deliveryDate);

    const date = new Date(deliveryDate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // i mesi sono indicizzato da 0 a 11
    const year = date.getUTCFullYear();
 
    


    return "book will be delivered on " + day + "/" + month + "/" + year;


  
}