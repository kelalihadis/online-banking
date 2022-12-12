const home = document.querySelector('.home');
const centerDiv = document.querySelector('.center-div');
const switchToReg = document.querySelector('.switchToReg');
const logInOut = document.getElementById('login');
const switchToLogIn = document.querySelector('.switchToLogIn');
const regPortal = document.querySelector('.register-portal');
const logInPortal = document.querySelector('.login-portal');
const Portal = document.querySelector('.portal');

const loginBtn = document.querySelector('.login-btn');
const loginAccNo = document.getElementById('accno');
const loginPinNo = document.getElementById('accpin');
const logInErr = document.querySelector('.loginErr')
const userName = document.querySelector('.username');
const availBalance= document.querySelector('.avail-balance');

const registerBtn = document.querySelector('.register-btn');
const regErr = document.querySelector('.regErr')
const regName = document.getElementById('username');
const regAccNo = document.getElementById('regaccno');
const regPin = document.getElementById('regaccpin');
const regConPin = document.getElementById('con-accpin');

const depositsBtn =  document.querySelector('.deposits-btn')
const witdrawalsBtn =  document.querySelector('.withdrawals-btn')
const transfersBtn =  document.querySelector('.transfers-btn')

const depositDiv =  document.querySelector('.deposit-div')
const withdrawDiv =  document.querySelector('.withdraw-div')
const transferDiv =  document.querySelector('.transfer-div')

const submitDbtn =  document.querySelector('.submit-deposit')
const submitWbtn =  document.querySelector('.submit-withdrawal')
const submitTbtn =  document.querySelector('.submit-transfer')

const depositAmntTf  = document.getElementById('deposit-amnt')
const withdrawaAmntlTf  = document.getElementById('withd-amnt')
const transAmntTf  = document.getElementById('trans-amnt')
const transAccTf  = document.getElementById('trans-acc')
const time = document.getElementById('time');
const profile = document.getElementById('profile');







function showTime(){
    //get date
    const today = new Date();

    //get hr,sec&min
    let hour = String(today.getHours()).padStart(2,0)
    const min =  String(today.getMinutes()).padStart(2,0)
    const sec = String(today.getSeconds()).padStart(2,0)
    //set am pm
    const amPm = hour>=12 ? 'PM':'AM'
    //set 12hr format
    hour = hour%12 || 12;
    time.innerText =`${hour}:${min}:${sec}  ${amPm}`
  setTimeout(showTime,1000)
}
function setBackground()
{
    let toDay = new Date();
    let hour = toDay.getHours()
    if(hour<12){
        //morninig
document.body.style.backgroundImage = "url('')"
// greeting.textContent = 'Good Morning'

    }
    else
     if(hour<18){
        //afternoon
        document.body.style.backgroundImage = "url('')"
        // greeting.textContent = 'Good Afternoon'
  }

  else{
        //night
        document.body.style.backgroundImage = "url('')"
    //    greeting.textContent = 'Good Evening'

    }
}


showTime()
// setBackground()


const account1 ={
    ownerName: 'Kelali',
    accountNum: 111111,
    pin:1111,
    balance: 2850
}

const account2 ={
    ownerName: 'Teka',
    accountNum: 222222,
    pin:2222,
    balance: 1300
}

const account3 ={
    ownerName: 'Alex',
    accountNum: 333333,
    pin:3333,
    balance: 0
}

const accounts = [account1,account2,account3];

window.onload = function(){
switchToReg.addEventListener('click', function(e){
regPortal.style.display = "inline-block"
logInPortal.style.display = "none"
});

const displayBalance = function(account){
    let toDay = new Date();
    let hour = toDay.getHours()
    if(hour<12){
        //morninig
        userName.innerHTML = `Good Morning ${currentAccount.ownerName}`
        userName.style.color = 'green'
        availBalance.textContent = `${currentAccount.balance}`
        document.body.style.backgroundImage = "url('morning.png')"


    }
    else
     if(hour<18){
        //afternoon
        userName.innerHTML = `Good Afternoon ${currentAccount.ownerName}`
        userName.style.color = 'green'
        availBalance.textContent = `${currentAccount.balance}`
        document.body.style.backgroundImage = "url('afternoon.png')"
       
  }

  else{
        //night
        userName.innerHTML = `Good Evening ${currentAccount.ownerName}`
        userName.style.color = 'green'
        availBalance.textContent = `${currentAccount.balance}`
        document.body.style.backgroundImage = "url('night.png')"
     

    }

    // userName.innerHTML = `Well Come ${currentAccount.ownerName}`
    // userName.style.color = 'green'
    // availBalance.textContent = `${currentAccount.balance}`

}

switchToLogIn.addEventListener('click', function(e){
    regPortal.style.display = "none"
    logInPortal.style.display = "inline-block"
    });
       const accNoPat = "^[0-9]{6}$";
      const pinNoPat = "^[0-9]{4}$";
      let currentAccount;
 loginBtn.addEventListener('click',function(e){
    e.preventDefault();
 
   const acc = loginAccNo.value;
   const pin = loginPinNo.value;
   currentAccount = accounts.find(account=>account?.pin ==  pin )
   if(acc.match(accNoPat) && pin.match(pinNoPat)&&currentAccount){
     displayBalance(currentAccount);

    regPortal.style.display = "none"
    logInPortal.style.display = "none"
    Portal.style.display = "inline-block"
    profile.style.display = "inline-block"
    logInOut.textContent= 'Log Out'
    logInOut.style.color = 'white'
    loginAccNo.value = '';
    loginPinNo.value = '';

    time.style.display = "inline-block"

   }
   else{
    logInErr.innerHTML = 'Please Enter valid Details'
    logInErr.style.color = 'red'
    loginAccNo.value = '';
    loginPinNo.value = '';
}
    });


depositsBtn.addEventListener('click',function(){
    depositDiv.style.display = "inline-block"
    withdrawDiv.style.display = "none"
    transferDiv.style.display = "none"
});
witdrawalsBtn.addEventListener('click',function(){
    withdrawDiv.style.display = "inline-block"
    depositDiv.style.display = "none"
    transferDiv.style.display = "none"
});
transfersBtn.addEventListener('click',function(){
    transferDiv.style.display = "inline-block"
    withdrawDiv.style.display = "none"
    depositDiv.style.display = "none"
});



submitDbtn.addEventListener('click',function(e){
    e.preventDefault()
    const amount = Number(depositAmntTf.value);
    currentAccount.balance+=amount;
    depositAmntTf.value = '';
    displayBalance(currentAccount);
   
});


submitWbtn.addEventListener('click',function(e){
    e.preventDefault()
    const amount = Number(withdrawaAmntlTf.value);
    currentAccount.balance-=amount;
    withdrawaAmntlTf.value = '';
    displayBalance(currentAccount);
});

submitTbtn.addEventListener('click',function(e){
    e.preventDefault()
    const recAccNo = Number(transAccTf.value);
    const reciever = accounts.find(acc=>acc?.accountNum ==recAccNo)
    const amount = Number(transAmntTf.value);
    currentAccount.balance-=amount;
    reciever.balance+=amount;
    transAmntTf.value = ''; 
    transAccTf.value = '';
    displayBalance(currentAccount);
});

 registerBtn.addEventListener('click',function(){
   const userName = regName.value
   const regAcc = regAccNo.value
   const regPin1 = regPin.value
   const regConPin1 = regConPin.value
if(userName!==null && regAcc.match(accNoPat) && regPin1.match(pinNoPat) && regConPin1.match(pinNoPat)&&(regPin1==regConPin1)){
    regErr.innerHTML = 'SuccessFully Registered'
    regErr.style.color = 'green'
 let account4 = {
    ownerName: userName ,
    accountNum:  regAcc,
    pin:regPin1,
    balance: 0
 }
accounts.push(account4)
console.log(accounts)
    regName.value = ''
    regAccNo.value = ''
    regPin.value = ''
    regConPin.value = ''
}
else{
    regErr.innerHTML = 'Please Enter valid Details'
    regErr.style.color = 'red'

    regName.value = ''
    regAccNo.value = ''
    regPin.value = ''
    regConPin.value = ''
}

    });
  



    logInOut.addEventListener('click', function(e){
  e.preventDefault()
    //    Portal.style.display = "none"
    //    logInOut.style.display = "none"
    // logInPortal.style.display = "inline-block"
    home.style.display =  home.style.display ==  "none" ? "inline-block" : "none"
    logInPortal.style.display =  home.style.display == "inline-block" ? "none" : "inline-block" 
     centerDiv.style.display = centerDiv.style.display == "inline-block" ? "none" : "inline-block" 
  
     if(logInOut.textContent == 'Log Out'){
        time.style.display = "none"
        Portal.style.display = "none"
        logInOut.textContent= 'Log In'
        profile.style.display = "none"
        setBackground()
        
     }
  
  })
function showUpdate(){
    return Portal.innerHTML = 
    `<div class="update-div">
    <form action="">
    Name: <input type="text" value="" id="newname">
    Account: <input type="text" value="" id="newacc">
    Pin: <input type="text" name="" id="newpin" value="">
    <button id="update-btn">Update</button>
</form>
    </div`
}
  profile.onclick = function(e){
e.preventDefault()
showUpdate()
const newName =document.getElementById('newname')
const newAcc =document.getElementById('newacc')
const newPin =document.getElementById('newpin')
const updateBtn = document.getElementById('update-btn');
newName.value=currentAccount.ownerName
newAcc.value=currentAccount.accountNum
newPin.value=currentAccount.pin
updateBtn.onclick = function(e){
    e.preventDefault()
    currentAccount.ownerName = newName.value
    currentAccount.accountNum = Number(newAcc.value)
    currentAccount.pin = Number(newPin.value)

    newName.value=currentAccount.ownerName
     newAcc.value=currentAccount.accountNum
     newPin.value=currentAccount.pin
        }
  }

    console.log(accounts)
}

// for modal

//modal events
const modalDiv = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-modal')
const modalBtn = document.querySelector('.btn-modal')
function openModal(){
modalDiv.classList.remove('hidden')
}

function closeModal (){
    modalDiv.classList.add('hidden')
}

     closeBtn.addEventListener('click',closeModal)
     modalBtn.addEventListener('click',openModal)

     document.addEventListener('keydown', function(e){
        if(e.key==='Escape'){
            if(!modalDiv.classList.contains('hidden')){closeModal();}
           
        }
    })
// modal end

// <!-- next modal btn -->
const userAccounts = []
const showNewAccDiv = document.querySelector('.success-acount')
const showNewAcc = document.querySelector('.success-acount span')
const nextBtn = document.querySelector('.next')
const closeNewAcc = document.querySelector('.close-new-acc')
const generateAccount = function(){
    const newAccount = Math.floor(100000 + Math.random() * 900000);
    return newAccount;
}
nextBtn.addEventListener('click',function(e){
     e.preventDefault()
     const ac = generateAccount()
  showNewAcc.textContent = ac
  showNewAccDiv.style.display = 'inline-block'
  modalDiv.style.display = 'none'
  
})
closeNewAcc.onclick = (e)=>{
    e.preventDefault()
    showNewAccDiv.style.display = 'none'

}
//  next modal btn  end 
// for lang only
const selectEl = document.querySelectorAll("select")
const iconsEl = document.querySelectorAll(".row i")
const translateBtn = document.querySelector(".transBtn")
const fromText = document.querySelector(".from-text")
const fromTo = document.querySelector(".from-to")
const exchangeIcon = document.querySelector(".exchange")
const paraEl = document.getElementById("para1")
selectEl.forEach((tag, id)=>{
    for (const country_code in countries){
        let selected;
        if(id == 0 && country_code == "en-GB"){
            selected = "selected"
        }

        else if(id == 1 && country_code == "am-ET"){
            selected = "selected"    
        }
        let option  = `<option value="${country_code}"${selected}>${countries[country_code]}</option>`
        tag.insertAdjacentHTML("beforeend",option)
    }
});
const intialValue ="Our online banking services provide easy and flexible bank transactions access. customers can make various transactions using smart phones or PC while being at home or at work."
translateBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    transButtonText()
    let text = paraEl.innerText
  transFrom = selectEl[0].value
  transTo = selectEl[1].value
//   console.log(text,transFrom,transTo)
  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${transFrom}|${transTo}`

  fetch(apiUrl).then(res=>res.json()).then(data=>{
    console.log(data)
    paraEl.innerText =(paraEl.innerText==intialValue)? data.responseData.translatedText:intialValue})
})

function transButtonText(){
    let text = translateBtn.innerText
    transFrom = selectEl[0].value
    transTo = selectEl[1].value
  //   console.log(text,transFrom,transTo)
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${transFrom}|${transTo}`
  
    fetch(apiUrl).then(res=>res.json()).then(data=>{
    //   console.log(data)
      translateBtn.innerText =(translateBtn.innerText=="English")? data.responseData.translatedText:"English"})
}

//lang end