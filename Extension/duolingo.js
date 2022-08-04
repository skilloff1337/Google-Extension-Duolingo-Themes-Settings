setBackGroundColor()

function setBackGroundColor() {
    chrome.storage.local.get(["ManualButton"], function (res) {
        if (res.ManualButton == null) {
            console.log("manual button null")
            return
        }
        console.log(res.ManualButton)
        if (res.ManualButton == true) 
        {
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
        } 
        else 
        {
            chrome.storage.local.get(["Theme"], function (res) {
                if (res.Theme === "blue") 
                {
                    document.documentElement.style.setProperty('--BackGroundColor', '#607d8b');
                    document.documentElement.style.setProperty('--TextColor', 'white');
                    document.documentElement.style.setProperty('--TextHeaderColor', '#000000');
                    document.documentElement.style.setProperty('--SelectedItem', '#69b2c8');
                }
                else if (res.Theme === "green")   
                {
                    document.documentElement.style.setProperty('--BackGroundColor', '#4a7e4a');
                    document.documentElement.style.setProperty('--TextColor', 'white');
                    document.documentElement.style.setProperty('--TextHeaderColor', 'black');
                    document.documentElement.style.setProperty('--SelectedItem', '#37bc8b');
                }
                else if (res.Theme === "yellow")
                {
                    document.documentElement.style.setProperty('--BackGroundColor', '#9ea24c');
                    document.documentElement.style.setProperty('--TextColor', 'white');
                    document.documentElement.style.setProperty('--TextHeaderColor', '#6c3e19');
                    document.documentElement.style.setProperty('--SelectedItem', '#e05436');
                }
                else{
                    document.documentElement.style.setProperty('--BackGroundColor', '#262626');
                    document.documentElement.style.setProperty('--TextColor', '#cbcbcb');
                    document.documentElement.style.setProperty('--TextHeaderColor', '#4e89e3');
                    document.documentElement.style.setProperty('--SelectedItem', '#484a4e');
                }
            });

            //document.documentElement.style.setProperty('--BackGroundColor', 'pink');
        }
    });
}
