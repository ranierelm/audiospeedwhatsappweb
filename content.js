const interval = setInterval(() => {
    const header = document.querySelector("._1QUKR");
    if (header) {
        clearInterval(interval)

        const selectBox = document.createElement("select")
        selectBox.classList.add("speedSelection")

        const option1 = document.createElement("option")
        option1.classList.add("optStyle")
        option1.value = "1";
        option1.text = " 1.0x"
        selectBox.appendChild(option1)

        const option2 = document.createElement("option")
        option2.value = "1.25";
        option2.text = "1.2x"
        selectBox.appendChild(option2)

        const option3 = document.createElement("option")
        option3.value = "1.5";
        option3.text = "1.5x"
        selectBox.appendChild(option3)

        const option4 = document.createElement("option")
        option4.value = "2";
        option4.text = "2.0x"
        selectBox.appendChild(option4)

        const option5 = document.createElement("option")
        option5.value = "2.5";
        option5.text = "2.5x"
        selectBox.appendChild(option5)

        const option6 = document.createElement("option")
        option6.value = "3";
        option6.text = "3.0x"
        selectBox.appendChild(option6)
    
        selectBox.addEventListener('change', () => {
            const audios = document.querySelectorAll("audio");
            
            console.log(selectBox.value)
            audios.forEach((audio) => {
                    audio.playbackRate = selectBox.value
                });
            });

        header.appendChild(selectBox)
    }
}, 1000)