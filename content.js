function setPageBackgroundColor() {
    if (document.querySelector("ytd-app")) {
        if (document.getElementsByClassName("ytp-ad-player-overlay").length > 0) {
            document.querySelector("video").currentTime =
                document.querySelector("video").duration
        }

        if (document.getElementsByTagName("ytd-promoted-sparkles-web-renderer")[0]) {
            document.getElementsByTagName("ytd-promoted-sparkles-web-renderer")[0]
                .style.display = "none"
        }

        if (document.querySelector("tp-yt-paper-dialog")) {
            document.querySelector("tp-yt-paper-dialog").style.display = "none"
        }

        if (document.querySelector("ytd-banner-promo-renderer")) {
            document.querySelector("ytd-banner-promo-renderer")
            .style.display = "none"
        }
    } else {
        if (document.querySelectorAll("video")[1]?.duration) {
            document.querySelectorAll("video")[1].currentTime =
                document.querySelectorAll("video")[1].duration
        }
    
        if (document.querySelector("lima-video")?.duration) {
            document.querySelector("lima-video").currentTime =
                document.querySelector("lima-video").duration
        }
    
        if (document
            .getElementsByClassName("src-components-curtain-curtain_curtain")
            .length > 0) {
            document.getElementsByClassName("src-components-curtain-curtain_curtain")[0]
                .style.display = "none";
            document.getElementsByClassName("src-components-curtain-curtain_curtain")[1]
                .style.display = "none";
            document.getElementsByClassName("src-components-curtain-curtain_skipBtn")[0]
                .style.display = "none";
        }

        if (document.getElementsByClassName("vid_overlay")[0]) {
            document.getElementsByClassName("vid_overlay")[0]
                .style.display = "none"
        }
    }
}

window.setInterval(setPageBackgroundColor, 200)