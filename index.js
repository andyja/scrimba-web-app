let myEmojis = ["💻", "⛷️", "👨‍🍳"];
const emojiContainer = document.getElementById("emojiContainer");
const emojiInput = document.getElementById("emoji-input");
const unshiftBtn = document.getElementById("unshift-btn");
const pushBtn = document.getElementById("push-btn");

function renderEmojis() {
    emojiContainer.innerHTML = "";
    for (let i = 0; i <myEmojis.length; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }
}
renderEmojis();

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) { 
        myEmojis.push(emojiInput.value);
        emojiInput.value = "";
        renderEmojis()
    }  
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) { 
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = "";
        renderEmojis()
    }  
})
