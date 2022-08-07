const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

// irrelevant code ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ 







// // The original code from the lesson 
// // ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
// // ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

// // ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
// // ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
// // The original code from the lesson 






// // beginning of refactoring attempt 1 (this one works)

// function insertEmoji(method){

//     if (emojiInput.value){
//         method
//         emojiInput.value = ""
//         renderEmojis()
//     }
// }

// pushBtn.addEventListener("click", function(){
//     insertEmoji( myEmojis.push (emojiInput.value))
// })

// unshiftBtn.addEventListener("click", function(){
//     insertEmoji( myEmojis.unshift (emojiInput.value))
// })

// //end of refactoring attempt 1 








// //beginning of refactoring attempt 2 (this one also works)

// function insertEmoji(method){
//     if (emojiInput.value){
//         if (method === "push") {
//         myEmojis.push (emojiInput.value)
//         } else { myEmojis.unshift (emojiInput.value) }
//         emojiInput.value = ""
//         renderEmojis()
//     }
// }


// pushBtn.addEventListener("click", function(){
//     insertEmoji("push")
// })

// unshiftBtn.addEventListener("click", function(){
//     insertEmoji("unshift") 
// })

// //end of refactoring attempt 2







// //beginning of refactoring attempt 3 (this one doesn't work)


// function insertEmoji(method){
//     if (emojiInput.value){
//         myEmojis.method(emojiInput.value) 
//         emojiInput.value = ""
//         renderEmojis()
//     }
// }


// pushBtn.addEventListener("click", function(){
//     insertEmoji(push(emoji))
// })

// unshiftBtn.addEventListener("click", function(){
//     insertEmoji(unshift)
// })


// //end of refactoring attempt 3






// irrelevant code ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 



popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})

