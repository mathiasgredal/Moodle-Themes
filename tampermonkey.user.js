// ==UserScript==
// @name         Moodle 2.0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://moodle.zbc.dk/*
// @grant        none
// @updateURL    https://github.com/mathiasgredal/Moodle-Themes/raw/master/tampermonkey-darkmode.user.js
// @downloadURL  https://github.com/mathiasgredal/Moodle-Themes/raw/master/tampermonkey-darkmode.user.js
// ==/UserScript==



init();

function init() {
    var thumbnails = {};
    thumbnails["Biologi niveau C"] = "https://github.com/mathiasgredal/Moodle-Themes/raw/master/Images/Biologi_DNA.jpg"
    // Coloring

    var background = "#2C2F33"
    var card = "#2C2F33"
    var header = "#23272A"
    var button = "#23272A"
    var text = "#fff"
    var cardholder = "#36393F"

    document.body.style.background = background;


    for(var i = 0; i <= document.styleSheets[1].cssRules.length; i++)
    {
        if(document.styleSheets[1].cssRules[i].selectorText)
        {
            document.getElementById("nav-drawer").style.backgroundColor = card;

            switch(document.styleSheets[1].cssRules[i].selectorText)
            {

                case "body aside.block.block_praxis_course_overview_cards":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    // Round cards
                    var cardElems = document.getElementsByClassName("praxis-course-overview-cards");
                    for(var x = 0; x < cardElems.length; x++)
                    {
                        cardElems[x].style.borderRadius = "10px"
                        cardElems[x].style.backgroundColor = "transparent"
                        cardElems[x].getElementsByClassName("praxis-course-overview-cards-image")[0].style.borderTopRightRadius = "10px";
                        cardElems[x].getElementsByClassName("praxis-course-overview-cards-image")[0].style.borderTopLeftRadius = "10px";
                        cardElems[x].getElementsByClassName("praxis-course-overview-cards-activity")[0].style.borderBottomRightRadius = "10px";
                        cardElems[x].getElementsByClassName("praxis-course-overview-cards-activity")[0].style.borderBottomLeftRadius = "10px";

                        // get card titel
                        var cardtitle = cardElems[x].getElementsByClassName("praxis-course-overview-cards-description")[0].title;
                        var cardurl = thumbnails[cardtitle];
                        if(cardurl != undefined)
                        {
                            cardElems[x].getElementsByClassName("praxis-course-overview-cards-image")[0].style.backgroundImage = "url("+cardurl+")";
                        }
                    }
                    break;
                case "header.navbar":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = header;
                    break;
                case ".btn-secondary, aside.block_blog_menu div.card-block div.card-text.content div.footer form.blogsearchform input[type=\"submit\"], aside.block_comments div.card-block div.card-text.content div.mdl-left div.comment-ctrl div.comment-area div.fd a[id^=\"comment-action-post\"], aside.block_ipraxisedit div.card-block div.card-text.content div.edit-link a, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.goto-archive-button, div.praxis_cohort_news_archive div.admin-search-container form.praxis-form-inline div.form-group.archive-submit-container input#submit-button, #page-blocks-progress-overview .block_progress .buttons input[type=\"button\"], .btn-secondary:link, aside.block_blog_menu div.card-block div.card-text.content div.footer form.blogsearchform input[type=\"submit\"]:link, aside.block_comments div.card-block div.card-text.content div.mdl-left div.comment-ctrl div.comment-area div.fd a[id^=\"comment-action-post\"]:link, aside.block_ipraxisedit div.card-block div.card-text.content div.edit-link a:link, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button:link, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.goto-archive-button:link, div.praxis_cohort_news_archive div.admin-search-container form.praxis-form-inline div.form-group.archive-submit-container input#submit-button:link, #page-blocks-progress-overview .block_progress .buttons input[type=\"button\"]:link, .btn-secondary:visited, aside.block_blog_menu div.card-block div.card-text.content div.footer form.blogsearchform input[type=\"submit\"]:visited, aside.block_comments div.card-block div.card-text.content div.mdl-left div.comment-ctrl div.comment-area div.fd a[id^=\"comment-action-post\"]:visited, aside.block_ipraxisedit div.card-block div.card-text.content div.edit-link a:visited, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button:visited, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.goto-archive-button:visited, div.praxis_cohort_news_archive div.admin-search-container form.praxis-form-inline div.form-group.archive-submit-container input#submit-button:visited, #page-blocks-progress-overview .block_progress .buttons input[type=\"button\"]:visited, button.btn-secondary, a.btn-secondary, aside.block_comments div.card-block div.card-text.content div.mdl-left div.comment-ctrl div.comment-area div.fd a[id^=\"comment-action-post\"], aside.block_ipraxisedit div.card-block div.card-text.content div.edit-link a, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.goto-archive-button":
                    document.styleSheets[1].cssRules[i].style.borderColor = button;
                    document.styleSheets[1].cssRules[i].style.backgroundColor = button;
                    break;
                case "header#page-header div#page-navbar div.breadcrumb-nav nav ol.breadcrumb li.breadcrumb-item":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "header#page-header div#page-navbar div.breadcrumb-nav nav ol.breadcrumb li.breadcrumb-item:last-child a":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "header#page-header div#page-navbar div.breadcrumb-nav nav ol.breadcrumb li.breadcrumb-item a":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "header#page-header div#page-navbar i.home-icon":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "h3":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "body aside.block.block_praxis_course_overview_cards .card-block div.card-text.content div.praxis-course-overview-cards-wrapper div.praxis-course-overview-cards div.praxis-course-overview-cards-activity":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = card;
                    break;
                case "body aside.block.block_praxis_course_overview_cards .card-block div.card-text.content div.praxis-course-overview-cards-wrapper div.praxis-course-overview-cards div.praxis-course-overview-cards-shortname":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = card;
                    break;
                case "body aside.block.block_praxis_course_overview_cards .card-block div.card-text.content div.praxis-course-overview-cards-wrapper div.praxis-course-overview-cards div.praxis-course-overview-cards-description":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = card;
                    break;
                case "body div.course-content ul.topics li.section.main, body div.course-content ul.weeks li.section.main":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = background;
                    break;
                case "body div.course-content ul.topics li.section.main div.content h3.section-title a, body div.course-content ul.topics li.section.main div.content h3.sectionname a, body div.course-content ul.weeks li.section.main div.content h3.section-title a, body div.course-content ul.weeks li.section.main div.content h3.sectionname a":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "body div.course-content ul.topics li.section.main div.content ul.section li.activity div.mod-indent-outer div.activityinstance .instancename, body div.course-content ul.weeks li.section.main div.content ul.section li.activity div.mod-indent-outer div.activityinstance .instancename":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "body div.course-content ul.topics li.section.main div.content div.summary p, body div.course-content ul.topics li.section.main div.content div.summarytext p, body div.course-content ul.weeks li.section.main div.content div.summary p, body div.course-content ul.weeks li.section.main div.content div.summarytext p":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "aside#block-region-side-pre aside.block.card div.card-block":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = card;
                    break;
                case "aside#block-region-side-pre aside.block.card div.card-block h3.card-title":
                    document.styleSheets[1].cssRules[i].style.color = text;;
                    break;
                case "#page-footer .row .page-footer-address p":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "a:link":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "aside.block.block_praxis_cohort_news":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    break;
                case "body div#page-wrapper div#page div#page-content div#region-main-box section#region-main div.card.card-block h2":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "body div#page-wrapper div#page div#page-content div#region-main-box section#region-main div.card.card-block":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    break;
                case "body":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case ".table-striped tbody tr:nth-of-type(odd), table.collection tbody tr:nth-of-type(odd), table#explaincaps tbody tr:nth-of-type(odd), table#defineroletable tbody tr:nth-of-type(odd), table.grading-report tbody tr:nth-of-type(odd), table#listdirectories tbody tr:nth-of-type(odd), table.rolecaps tbody tr:nth-of-type(odd), table.userenrolment tbody tr:nth-of-type(odd), form#movecourses table tbody tr:nth-of-type(odd), #page-admin-course-index .editcourse tbody tr:nth-of-type(odd), .forumheaderlist tbody tr:nth-of-type(odd), table.flexible tbody tr:nth-of-type(odd), .generaltable tbody tr:nth-of-type(odd)":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = card;
                    break;
                case "a:hover":
                case "a:link":
                case "a:visited":
                case "a":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case ".path-mod-assign td.submissionnotgraded, .path-mod-assign div.submissionnotgraded":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "h5":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "body #page #nav-drawer":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = card;
                    break;
                case "body #page #nav-drawer .list-group .drawer-group-wrapper h2.drawer-headline":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "body #page #nav-drawer .list-group .drawer-group-wrapper .list-group-item.font-weight-bold":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "body #page #nav-drawer .list-group .drawer-group-wrapper .list-group-item":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case "body #page #nav-drawer .list-group .drawer-group-wrapper .list-group-item .fa-stack .over":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case ".block.block_pxmyoverview":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    break;
                case ".nav-tabs .nav-link.active, .nav-tabs .nav-item.open .nav-link, .nav-tabs .nav-link.active:focus, .nav-tabs .nav-item.open .nav-link:focus, .nav-tabs .nav-link.active:hover, .nav-tabs .nav-item.open .nav-link:hover":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = card;
                    break;
                case "div#region-main-box section#region-main ul.nav.nav-tabs li.nav-item a.nav-link.active":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case ".list-group-item":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    document.styleSheets[1].cssRules[i].style.border = "2px solid "+card
                    break;
                case ".btn-default:hover, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:hover, .btn-default:focus, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:focus, .btn-default:active, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:active, .btn-default:active:focus, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:active:focus, .btn-default.active, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.active.praxis-button.list-more-button.inactive, .btn-default:link:hover, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:link:hover, .btn-default:link:focus, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:link:focus, .btn-default:link:active, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:link:active, .btn-default:link:active:focus, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:link:active:focus, .btn-default:link.active, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:link.active, .btn-default:visited:hover, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:visited:hover, .btn-default:visited:focus, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:visited:focus, .btn-default:visited:active, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:visited:active, .btn-default:visited:active:focus, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:visited:active:focus, .btn-default:visited.active, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:visited.active, button.btn-default:hover, button.btn-default:focus, button.btn-default:active, button.btn-default:active:focus, button.btn-default.active, a.btn-default:hover, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:hover, a.btn-default:focus, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:focus, a.btn-default:active, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:active, a.btn-default:active:focus, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:active:focus, a.btn-default.active, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.active.praxis-button.list-more-button.inactive":
                    document.styleSheets[1].cssRules[i].style.borderColor = button;
                    document.styleSheets[1].cssRules[i].style.backgroundColor = button;
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case ".btn-default, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive, .btn-default:link, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:link, .btn-default:visited, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive:visited, button.btn-default, a.btn-default, aside.block.block_praxis_cohort_news .card-block div.card-text.content div.news-container-footer div.list-more-container a.praxis-button.list-more-button.inactive":
                    document.styleSheets[1].cssRules[i].style.borderColor = button;
                    document.styleSheets[1].cssRules[i].style.backgroundColor = button;
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;
                case ".table-hover tbody tr:hover, table.grading-report tbody tr:hover, .forumheaderlist tbody tr:hover, .generaltable tbody tr:hover, table.flexible tbody tr:hover, .category_subcategories tbody tr:hover, table#modules tbody tr:hover, table#permissions tbody tr:hover":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    break;
                case ".preferences-container .preference-table tr td:nth-child(even)":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    break;
                case ".dropdown-menu":
                    document.styleSheets[1].cssRules[i].style.backgroundColor = cardholder;
                    document.styleSheets[1].cssRules[i].style.border = "1px solid "+card;
                    break;
                case ".dropdown-menu .dropdown-item":
                    document.styleSheets[1].cssRules[i].style.borderBottom = "1px solid "+card;
                    break;
                case ".table th, table.collection th, table.flexible th, .generaltable th, .table td, table.collection td, table.flexible td, .generaltable td":
                    document.styleSheets[1].cssRules[i].style.borderTop = "1px solid " + card;
                    break;
                case "h4":
                    document.styleSheets[1].cssRules[i].style.color = text;
                    break;


            }
        }

    }

}



