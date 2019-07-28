chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Open ApkOnline Android online for Arcade Games",
        id: "ArcadeGamesApkOnline",
        contexts: ["selection", "link", "editable", "image"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "ArcadeGamesApkOnline") {
        ArcadeGamesApkOnline();
    }
});

function ArcadeGamesApkOnline() {         
  	
  		gourl =  "https://www.apkonline.net/games/arcade";
    	window.open(gourl,'_blank');
	
}



