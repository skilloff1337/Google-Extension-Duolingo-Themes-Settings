setBackGroundColor()

function setBackGroundColor() {
    chrome.storage.local.get(["ManualButton"], function (res) {
        if (res.ManualButton == true) {
            chrome.storage.local.get(["BackGroundColor"], function (bttn) {
                document.documentElement.style.setProperty('--BackGroundColor', bttn.BackGroundColor);
            });
            chrome.storage.local.get(["TextColor"], function (bttn) {
                document.documentElement.style.setProperty('--TextColor', bttn.TextColor);
            });
            chrome.storage.local.get(["HeaderTextColor"], function (bttn) {
                document.documentElement.style.setProperty('--TextHeaderColor', bttn.HeaderTextColor);
            });
            chrome.storage.local.get(["SelectedItem"], function (bttn) {
                document.documentElement.style.setProperty('--SelectedItem', bttn.SelectedItem);
            });
        } else {
            chrome.storage.local.get(["Theme"], function (res) {
                if (res.Theme === "blue") {
                    setProperty('#607d8b', 'white', '#000000', '#69b2c8')
                } else if (res.Theme === "green") {
                    setProperty('#4a7e4a', 'white', 'black', '#37bc8b')
                } else if (res.Theme === "yellow") {
                    setProperty('#9ea24c', 'white', '#6c3e19', '#e05436')
                } else { // Dark
                    setProperty('#262626', '#cbcbcb', '#4e89e3', '#484a4e')
                }
            });
        }
    });
}

function setProperty(BackGroundColor, TextColor, TextHeaderColor, SelectedItem) {
    document.documentElement.style.setProperty('--BackGroundColor', BackGroundColor);
    document.documentElement.style.setProperty('--TextColor', TextColor);
    document.documentElement.style.setProperty('--TextHeaderColor', TextHeaderColor);
    document.documentElement.style.setProperty('--SelectedItem', SelectedItem);
}
