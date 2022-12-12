'use strict';


import {currentAccount} from './scriptcopy.js'
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