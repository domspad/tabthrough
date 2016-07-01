


chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.executeScript(null, {file: "content.js"});
});


chrome.commands.onCommand.addListener(function (command)
{
    if (command == "Execute Tab Through")
    {
        chrome.tabs.executeScript(null, {file: "content.js"});
    };
});
