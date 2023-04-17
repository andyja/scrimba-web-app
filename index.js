let myEmojis = ["💻", "⛷️", "👨‍🍳"];
const emojiContainer = document.getElementById("emojiContainer");

function renderEmojis() {
for (let i = 0; i <myEmojis.length; i++) {
    const emoji = document.createElement('span');
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
}
}


const pushBtn = document.getElementById("push-btn");
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input");
    if (emojiInput.value) { 
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    emojiContainer.innerHTML = "";
    renderEmojis()
    }  
})

const unshiftBtn = document.getElementById("unshift-btn");
unshiftBtn.addEventListener("click", function(){
    console.log("clicked")
    const emojiInput = document.getElementById("emoji-input");
    if (emojiInput.value) { 
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    emojiContainer.innerHTML = "";
    renderEmojis()
    }  
})
