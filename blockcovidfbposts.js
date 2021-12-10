const covidlibrary = ["covid", "covid-19", "covid19", "coronavirus", "corona-virus", "corona", "virus", "pandemic", "epidemic", "vaccine", "vaccination", "lockdown", "lock-down", "lock down", "pfizer", "biontech", "pfizer-biontech", "pfizer/biontech", "biontech/pfizer", "biontech-pfizer", "moderna", "astrazeneca", "oxford-astrazeneca", "oxford/astrazeneca", "astrazeneca-oxford", "astrazeneca/oxford", "j&j/janssen", "j&j", "j & j", "j and j", "johnson & johnson", "johnson&johnson", "johnson and johnson", "πανδημία", "πανδημια", "επιδημία", "επιδημια", "μπόλι", "μπολι", "εμβόλιο", "εμβολιο", "εμβόλια", "εμβολια", "εμβολιασμός", "εμβολιασμος", "τσιόδρας", "τσιοδρας", "παγώνη", "παγωνη", "πλεύρης", "πλευρης", "ανεμβολίαστοι", "ανεμβολιαστοι", "νέα μέτρα", "νεα μετρα", "κόβιντ", "κοβιντ", "κόβιντ-19", "κοβιντ-19", "κόβιντ19", "κοβιντ19", "κορωνοϊός", "κορωνοιός", "κορωνοιος", "κορωναιός", "κορωναιος", "κορονοϊός", "κορονοιός", "κορονοιος", "κορώνα", "λοκντάουν", "λοκ-ντάουν", "λοκ ντάουν", "λοκνταουν", "λοκ-νταουν", "λοκ νταουν", "ψέκας", "ψεκας", "ψέκες", "ψεκες", "ψεκασμένος", "ψεκασμενος", "ψεκασμένοι", "ψεκασμενοι", "δέλτα", "δελτα", "όμικρον", "ομικρον", "delta", "omicron", "φάουτσι", "φαουτσι", "fauci", "κρούσματα", "κρουσματα", "sars-cov-2", "sars cov", "αρνητής", "αρνητης", "αρνητές", "αρνητες", "μετάλλαξη", "μεταλλαξη", "έκτακτα μέτρα", "εκτακτα μετρα", "ράπιντ", "ραπιντ", "rapid test", "μοριακό τεστ", "μοριακο τεστ", "σελφ", "σελφ-τεστ", "self-test", "self test", "pcr", "διασπορά", "διασπορα", "μεθ", "εντατική", "εντατικη", "κλίνες", "κλινες", "διασωληνωμένοι", "διασωληνωμενοι", "mrna", "m-rna", "m rna", "μρνα", "μ ρνα", "μ-ρνα", "σερβετάλης", "σερβεταλης", "αντιεμβολιαστής", "αντιεμβολιαστης", "αντιεμβολιαστές", "αντιεμβολιαστες", "καραντίνα", "καραντινα", "quarantine", "μένουμε σπίτι", "μενουμε σπιτι", "cordon sanitaire", "sanitary cordon", "τρίτη δόση", "τριτη δοση", "αναμνηστική δόση", "αναμνηστικη δοση", "επαναληπτική δόση", "επαναληπτικη δοση", "βιοπολιτική", "βιοπολιτικη", "biopolitics", "βιοεξουσία", "βιοεξουσια", "biopower", "θανατοπολιτική", "θανατοπολιτικη", "thanatopolitics", "agamben", "αγκάμπεν", "αγκαμπεν", "φουκώ", "φουκω", "foucault", "απαγόρευση κυκλοφορίας", "απαγορευση κυκλοφοριας", "κορωνοχρέη", "κορωνοχρεη", "κορονοχρέη", "κορονοχρεη", "boli", "mpoli", "emvolio", "coronabonds", "corona bonds", "κορωνο-ομόλογα", "κορωνοομόλογα", "κορωνομόλογα", "κορωνο-ομoλογα", "κορωνοομoλογα", "κορωνoμoλογα", "σανεμβόλια", "σανεμβολια", "πλατφορμιασμός", "πλατφορμιασμος", "booster shot", "vaccinated", "unvaccinated", "ανοσία", "ανοσια", "immunity", "immunisation", "immunization", "immune", "βασιλακόπουλος", "βασιλακοπουλος", "εμβολιασμό", "εμβολιασμο", "θνητότητα", "θνητοτητα", "εμβολιαστική", "εμβολιαστικη", "εμβολιαστικού", "εμβολιαστικου"]
const covidlibraryRegex = new RegExp(covidlibrary.join("|"), "i")
function hide() {
    const fbelements = [".ecm0bbzt", ".ihqw7lf3", ".qt6c0cv9", ".jb3vyjys", ".ni8dbmo4", ".stjgntxs", ".sbcfpzgs"]
    const elements = document.querySelectorAll(fbelements)
    elements.forEach(function(element) {
        if (!element.classList.contains("hidden") && element.innerText.match(covidlibraryRegex) !== null) {
            element.classList.add("hidden")
            const warning1 = document.createElement("img")
            warning1.src = "https://raw.githubusercontent.com/NickChach/blockcovidfacebookposts/main/cutecat.png"
            warning1.style = "display: block; margin: auto; width: 50%; height: auto"
            const warning2 = document.createElement("p")
            warning2.innerText = "Beware! Covid-19 content! If you want to read it, click here."
            warning2.style = "display: block; margin: auto; font-size: 1.5em; color: #33DBFF; text-shadow: 2px 2px 5px #FF5733; text-align: center;"
            element.replaceWith(warning1, warning2)
            warning2.addEventListener("click", function(e) {
                e.target.replaceWith(element)
                warning1.replaceWith()
            })
        }
    })
}
window.onload = function() {
    hide()
    window.addEventListener('scroll', hide)
}
