setBackGroundColor()

function setBackGroundColor() {
    chrome.storage.local.get(["ManualButton"], function (res) {
        if (res.ManualButton == true) {
            chrome.storage.local.get(["BackGroundColor"], function (bttn) {
                document.documentElement.style.setProperty('--BackGroundColor', bttn.BackGroundColor);
            });
            chrome.storage.local.get(["BackGroundColorSecond"], function (bttn) {
                document.documentElement.style.setProperty('--BackGroundColorSecond', bttn.BackGroundColorSecond);
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
            chrome.storage.local.get(["ButtonColor"], function (bttn) {
                document.documentElement.style.setProperty('--ButtonColor', bttn.ButtonColor);
            });
        } else {
            chrome.storage.local.get(["Theme"], function (res) {
                if (res.Theme === "blue") {
                    setProperty('#607d8b', '#67a8ba','#4a4848', '#000000', '#69b2c8', '#5cc373')
                } else if (res.Theme === "green") {
                    setProperty('#4a7e4a','#50a84a', '#4a4848', 'black', '#37bc8b', '#69b2c8')
                } else if (res.Theme === "yellow") {
                    setProperty('#9ea24c','#c2d178', '#4a4848', '#6c3e19', '#e05436', '#c8b469')
                } else if (res.Theme === "white") {
                    setProperty('white','#5f5f5f', '#afafaf', '#3c3c3c', "#d2d4d6", '#464a4b')
                } else { // Dark
                    setProperty('#262626','#343434', '#cbcbcb', '#4e89e3', '#484a4e', '#503b99')
                }
            });
        }
    });
}

function setProperty(BackGroundColor, BackGroundColorSecond, TextColor, TextHeaderColor, SelectedItem, ButtonColor) {
    document.documentElement.style.setProperty('--BackGroundColor', BackGroundColor);
    document.documentElement.style.setProperty('--BackGroundColorSecond', BackGroundColorSecond);
    document.documentElement.style.setProperty('--TextColor', TextColor);
    document.documentElement.style.setProperty('--TextHeaderColor', TextHeaderColor);
    document.documentElement.style.setProperty('--SelectedItem', SelectedItem);
    document.documentElement.style.setProperty('--ButtonColor', ButtonColor);
}
