document.onload = init();

function init() {
    // Buttons
    var changeButton = document.getElementById("Change")
    var resetButton = document.getElementById("Reset")
    var manualButton = document.getElementById("ManualSettings")
    var settingsButton = document.getElementById("settingsButton")
    var aboutButton = document.getElementById("aboutButton")
    // Colors
    var theme = document.getElementById("theme");
    var backGroundColor = document.getElementById("bgColor");
    var backGroundColorSecond = document.getElementById("bgColorSec");
    var textColor = document.getElementById("textColor")
    var headerTextColor = document.getElementById("headerTextColor")
    var sellectedItemColor = document.getElementById("sellectedItemColor")
    // Block
    var manualSettingsBlock = document.getElementById("manualSettingsBlock");


    chrome.storage.local.get(["ManualButton"], function (bttn) {
        if (bttn.ManualButton)
            manualButton.checked = bttn.ManualButton;
        else
            manualButton.checked = false;
        setActiveManualDiv(manualButton, manualSettingsBlock, theme)
    });
    chrome.storage.local.get(["Theme"], function (bttn) {
        if (bttn.Theme)
            theme.value = bttn.Theme;
        else
            theme.value = "dark"
    });
    chrome.storage.local.get(["BackGroundColor"], function (bttn) {
        if (bttn.BackGroundColor)
            backGroundColor.value = bttn.BackGroundColor;
        else
            backGroundColor.value = "#262626"
        backGroundColor.style.color = backGroundColor.value;
    });
    chrome.storage.local.get(["BackGroundColorSecond"], function (bttn) {
        if (bttn.BackGroundColorSecond)
            backGroundColorSecond.value = bttn.BackGroundColorSecond;
        else
            backGroundColorSecond.value = "#242D3D"
        backGroundColorSecond.style.color = backGroundColorSecond.value;
    });
    chrome.storage.local.get(["TextColor"], function (bttn) {
        if (bttn.TextColor)
            textColor.value = bttn.TextColor;
        else
            textColor.value = "#cbcbcb"
        textColor.style.color = textColor.value;
    });
    chrome.storage.local.get(["HeaderTextColor"], function (bttn) {
        if (bttn.HeaderTextColor)
            headerTextColor.value = bttn.HeaderTextColor;
        else
            headerTextColor.value = "#4e89e3"
        headerTextColor.style.color = headerTextColor.value;
    });
    chrome.storage.local.get(["SelectedItem"], function (bttn) {
        if (bttn.SelectedItem)
            sellectedItemColor.value = bttn.SelectedItem;
        else
            sellectedItemColor.value = "#484a4e"
        sellectedItemColor.style.color = sellectedItemColor.value;
    });

    changeButton.onclick = function () {
        var regex = /^#([0-9a-f]{3}){1,2}$/i;
        var infoError = "\n\nExample HEX: #484a4e\n\nYou can find the color on this site https://htmlcolorcodes.com/color-picker/"
        if (!regex.test(backGroundColor.value)) {
            alert("\nUnkown color hex for BackGround Color!" + infoError)
            return
        }
        if (!regex.test(backGroundColorSecond.value)) {
            alert("\nUnkown color hex for BackGround Second Color!" + infoError)
            return
        }
        if (!regex.test(textColor.value)) {
            alert("\nUnkown color hex for Text Color!" + infoError)
            return
        }
        if (!regex.test(headerTextColor.value)) {
            alert("\nUnkown color hex for Header Text Color!" + infoError)
            return
        }
        if (!regex.test(sellectedItemColor.value)) {
            alert("\nUnkown color hex for Sellected Item Color!" + infoError)
            return
        }

        setValueStorageLocal(manualButton, backGroundColor,backGroundColorSecond, textColor, headerTextColor, sellectedItemColor, theme)

        setColorTextManualDiv(backGroundColor,backGroundColorSecond, textColor, headerTextColor, sellectedItemColor)

        alert("If you have a Duolingo tab open, reload the page (ctrl + f5) to update the color scheme.");
    }

    resetButton.onclick = function () {
        backGroundColor.value = "#262626"
        backGroundColorSecond.value = "#343434"
        textColor.value = "#cbcbcb"
        headerTextColor.value = "#4e89e3"
        sellectedItemColor.value = "#484a4e"
        theme.value = "dark";
        manualButton.checked = false;

        setValueStorageLocal(manualButton, backGroundColor,backGroundColorSecond, textColor, headerTextColor, sellectedItemColor, theme)

        setColorTextManualDiv(backGroundColor,backGroundColorSecond, textColor, headerTextColor, sellectedItemColor)

        setActiveManualDiv(manualButton, manualSettingsBlock, theme)

        alert("If you have a Duolingo tab open, reload the page (ctrl + f5) to update the color scheme.");
    }
    manualButton.onclick = function () {
        setActiveManualDiv(manualButton, manualSettingsBlock, theme)
        chrome.storage.local.set({"ManualButton": manualButton.checked})
    }
    settingsButton.onclick = function () {
        switchPage(0);
    };
    aboutButton.onclick = function () {
        switchPage(1);
    };
    switchPage(0);
}

function switchPage(value) {
    var settingsPanel = document.getElementById("Settings");
    var aboutPanel = document.getElementById("About");

    var settingsButton = document.getElementById("settingsButton");
    var aboutButton = document.getElementById("aboutButton");

    if (value == 0) {
        aboutPanel.style.display = "none";
        aboutButton.style.background = "none"

        settingsPanel.style.display = "block"
        settingsButton.style.background = "#F7B155"
    } else {
        aboutPanel.style.display = "block";
        aboutButton.style.background = "#FD6E10"

        settingsPanel.style.display = "none"
        settingsButton.style.background = "none"
    }
}

function setActiveManualDiv(manualButton, manualSettingsBlock, theme) {
    if (manualButton.checked) {
        manualSettingsBlock.style.display = "block";
        theme.setAttribute('Disabled', '')
    } else {
        manualSettingsBlock.style.display = "none";
        theme.removeAttribute('Disabled', '')
    }
}

function setValueStorageLocal(manualButton, backGroundColor,backGroundColorSecond, textColor, headerTextColor, sellectedItemColor, theme) {
    chrome.storage.local.set({"ManualButton": manualButton.checked})
    chrome.storage.local.set({"BackGroundColor": backGroundColor.value})
    chrome.storage.local.set({"BackGroundColorSecond": backGroundColorSecond.value})
    chrome.storage.local.set({"TextColor": textColor.value})
    chrome.storage.local.set({"HeaderTextColor": headerTextColor.value})
    chrome.storage.local.set({"SelectedItem": sellectedItemColor.value})
    chrome.storage.local.set({"Theme": theme.value})
}

function setColorTextManualDiv(backGroundColor,backGroundColorSecond, textColor, headerTextColor, sellectedItemColor) {
    backGroundColor.style.color = backGroundColor.value;
    backGroundColorSecond.style.color = backGroundColorSecond.value;
    textColor.style.color = textColor.value;
    headerTextColor.style.color = headerTextColor.value;
    sellectedItemColor.style.color = sellectedItemColor.value;
}



