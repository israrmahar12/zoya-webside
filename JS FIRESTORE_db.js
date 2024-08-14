
const userDetial = document.querySelector(".userdetails")
const editsprofile = document.getElementById("editsprofile")

function createusercollection(user){
    firebase.firestore().collection("user")
    .doc(user.uid)
    .set({
        uid:user.uid,
        name:user.displayName,
        email:user.email,
        phone: "",
        course: "",
        portfolioURL: ""
    })
    
}

// async function getuserinfo(userID){

// }
// async function getuserinfoRealtime(userID){
//     if (userID) {
//         const userdocRef = await firebase.firestore()
//         .collection("user")
//         .doc(userID)
//         userdocRef.onSnapshot((doc)=>{
//             if(doc.exists){
//                 const userinfo = doc.data();
//                 if(userinfo){
//                     userDetial.innerHTML = `
//                     <h3>${userinfo.name}</h3>
//                     <h3>${userinfo.email}</h3>
//                     <h3>${userinfo.phone}</h3>
//                     `
//                 }
//             }

//         })
//     } else {
//         userDetial.innerHTML = `
//        <h3>please login</h3>
//        `
//    }
// }














async function getuserinfoRealtime(userID){
    if (userID) {
        const userdocRef = await firebase.firestore()
        .collection("users")
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                const userinfo = doc.data();
                if(userinfo){
                    userDetial.innerHTML = `
                    <h3>${userinfo.name}</h3>
                    <h3>${userinfo.email}</h3>
                       <h3>${userinfo.phone}</h3>
                    <h3>${userinfo. specialty}</h3>
                    <h3>${userinfo.protfoliourl}</h3> 
                    <h3>${userinfo.experience}</h3>
                    `


                    editsprofile["nama"].value = userinfo.name
                    editsprofile["profileEmail"].value = userinfo.Email
                    editsprofile["phone"].value = userinfo.phone
                    editsprofile["specialty"].value = userinfo.specialty
                    editsprofile["protfoliourl"].value = userinfo.protfoliourl
                    editsprofile["experience"].value = userinfo.experience
                    
                }
            }

        })
    } else {
        userDetial.innerHTML = `
       <h3>please login</h3>
       `
   }
}

function userupdate(e){
    e.preventDefult()
    const userDocRef = firebase
    .firestore()
    .collection("user")
    .doc(firebase.auth().currentuser.uid);


   userDocRef.userupdate({
    name : editsprofile["nama"].value,
    email : editsprofile["Email"].value,
    phone : editsprofile["phone"].value,
    specialty : editsprofile["specialty"].value,
    protfoliourl : editsprofile["protfoliourl"].value,
    experience : editsprofile["experience"].value,

   })
}