const signup = async (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email, password);

 try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await result.user. updateProfile({
      displayName: "User",
    })
    await result.user.sendEmailVerification()
    console.log(result);
    alert(`wellcom ${result.user.email}`)
    createusercollection(result.user)
 } catch (error) {
    console.log(error);
    alert(error.message)
    createusercollection(null)
 }
 email.value = ""

}

