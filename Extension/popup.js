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
    var buttonColor = document.getElementById("buttonColor")
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
    });
    chrome.storage.local.get(["BackGroundColorSecond"], function (bttn) {
        if (bttn.BackGroundColorSecond)
            backGroundColorSecond.value = bttn.BackGroundColorSecond;
        else
            backGroundColorSecond.value = "#242D3D"
    });
    chrome.storage.local.get(["TextColor"], function (bttn) {
        if (bttn.TextColor)
            textColor.value = bttn.TextColor;
        else
            textColor.value = "#cbcbcb"
    });
    chrome.storage.local.get(["HeaderTextColor"], function (bttn) {
        if (bttn.HeaderTextColor)
            headerTextColor.value = bttn.HeaderTextColor;
        else
            headerTextColor.value = "#4e89e3"
    });
    chrome.storage.local.get(["SelectedItem"], function (bttn) {
        if (bttn.SelectedItem)
            sellectedItemColor.value = bttn.SelectedItem;
        else
            sellectedItemColor.value = "#484a4e"
    });
    chrome.storage.local.get(["ButtonColor"], function (bttn) {
        if (bttn.ButtonColor)
            buttonColor.value = bttn.ButtonColor;
        else
            buttonColor.value = "#484a4e"
    });
    changeButton.onclick = function () {
        setValueStorageLocal(manualButton, backGroundColor,backGroundColorSecond, textColor, headerTextColor, sellectedItemColor, buttonColor, theme)
        alert("If you have a Duolingo tab open, reload the page (ctrl + f5) to update the color scheme.");
    }

    resetButton.onclick = function () {
        backGroundColor.value = "#262626"
        backGroundColorSecond.value = "#343434"
        textColor.value = "#cbcbcb"
        headerTextColor.value = "#4e89e3"
        sellectedItemColor.value = "#484a4e"
        buttonColor.value = "#503b99"
        theme.value = "dark";
        manualButton.checked = false;

        setValueStorageLocal(manualButton, backGroundColor,backGroundColorSecond, textColor, headerTextColor, sellectedItemColor,buttonColor, theme)

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

function setValueStorageLocal(manualButton, backGroundColor,backGroundColorSecond, textColor, headerTextColor, sellectedItemColor,buttonColor, theme) {
    chrome.storage.local.set({"ManualButton": manualButton.checked})
    chrome.storage.local.set({"BackGroundColor": backGroundColor.value})
    chrome.storage.local.set({"BackGroundColorSecond": backGroundColorSecond.value})
    chrome.storage.local.set({"TextColor": textColor.value})
    chrome.storage.local.set({"HeaderTextColor": headerTextColor.value})
    chrome.storage.local.set({"SelectedItem": sellectedItemColor.value})
    chrome.storage.local.set({"ButtonColor": buttonColor.value})
    chrome.storage.local.set({"Theme": theme.value})
}



