$(function () {

    let words = [
        { en: "always", ua: "завжди" },
        { en: "never", ua: "ніколи" },
        { en: "usually", ua: "зазвичай" },
        { en: "sometimes", ua: "інколи" },
        { en: "book", ua: "книга" },
        { en: "sun", ua: "сонце" },
        { en: "city", ua: "місто" },
        { en: "car", ua: "машина" },
        { en: "water", ua: "вода" },
        { en: "house", ua: "будинок" }
    ];

    words = words.sort(() => Math.random() - 0.5);

    let step = 0;
    let yes = 0;
    let no = 0;

    function showWord() {
        if (step >= words.length) {
            let percent = Math.round((yes / words.length) * 100);
            let level = "";

            if (percent >= 90) level = "Відмінно!";
            else if (percent >= 70) level = "Добре";
            else if (percent >= 50) level = "Середньо";
            else level = "Потрібно більше практики";

            $("#level").text(level + " (" + percent + "%)");
            $("#modal").css("display", "flex");
            return;
        }

        $("#card").text(words[step].en);
        $("#progress").text((step + 1) + "/" + words.length);
    }

    $("#card").click(function () {
        let val = $("#input").val().trim().toLowerCase();
        if (!val) return;

        if (val === words[step].ua) {
            yes++;
            $("#yes").text(yes);
        } else {
            no++;
            $("#no").text(no);
        }

        $("#input").val("");
        step++;
        showWord();
    });

    $("#close").click(function () {
        $("#modal").hide();
    });

    showWord();
});
