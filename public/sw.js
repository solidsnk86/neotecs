if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const d=e=>a(e,r),f={module:{uri:r},exports:n,require:d};i[r]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/D1E5dQLM3rR16pzjHE5CG/_buildManifest.js",revision:"7ea25da620d3a591e04ef390740ceb4e"},{url:"/_next/static/D1E5dQLM3rR16pzjHE5CG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/123-cc85cbc0a72f9bd2.js",revision:"cc85cbc0a72f9bd2"},{url:"/_next/static/chunks/1bfc9850-67194a05cb4feca2.js",revision:"67194a05cb4feca2"},{url:"/_next/static/chunks/26.fad1eec05192e579.js",revision:"fad1eec05192e579"},{url:"/_next/static/chunks/262-511d93c02a6734ec.js",revision:"511d93c02a6734ec"},{url:"/_next/static/chunks/265-f99b905abf8b2963.js",revision:"f99b905abf8b2963"},{url:"/_next/static/chunks/304-02a38bc1b5df22d8.js",revision:"02a38bc1b5df22d8"},{url:"/_next/static/chunks/501-2d7172051c4e9ad1.js",revision:"2d7172051c4e9ad1"},{url:"/_next/static/chunks/522-d8ebec8e267b94a4.js",revision:"d8ebec8e267b94a4"},{url:"/_next/static/chunks/524-7d9c2f075f987118.js",revision:"7d9c2f075f987118"},{url:"/_next/static/chunks/769-7ef82d2fe4a8b81a.js",revision:"7ef82d2fe4a8b81a"},{url:"/_next/static/chunks/795-b84cd646f7347dc3.js",revision:"b84cd646f7347dc3"},{url:"/_next/static/chunks/874-74a346a259645887.js",revision:"74a346a259645887"},{url:"/_next/static/chunks/904-19065042d2fd83f9.js",revision:"19065042d2fd83f9"},{url:"/_next/static/chunks/962-2de485c8a64a7741.js",revision:"2de485c8a64a7741"},{url:"/_next/static/chunks/965-96bfb0ef09288590.js",revision:"96bfb0ef09288590"},{url:"/_next/static/chunks/973-bc61d3da6daa3e8a.js",revision:"bc61d3da6daa3e8a"},{url:"/_next/static/chunks/framework-2c16ac744b6cdea6.js",revision:"2c16ac744b6cdea6"},{url:"/_next/static/chunks/main-576a889b874e8a2d.js",revision:"576a889b874e8a2d"},{url:"/_next/static/chunks/pages/_app-ae1dfde22d579f85.js",revision:"ae1dfde22d579f85"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/docs-f71dbd34da6e7ff6.js",revision:"f71dbd34da6e7ff6"},{url:"/_next/static/chunks/pages/docs/HtmlDoc-7b9e71f24106fb23.js",revision:"7b9e71f24106fb23"},{url:"/_next/static/chunks/pages/docs/Introduction-e8bbea43aae06052.js",revision:"e8bbea43aae06052"},{url:"/_next/static/chunks/pages/docs/css-e2347addfe870984.js",revision:"e2347addfe870984"},{url:"/_next/static/chunks/pages/docs/django-c6a5bb1361bed767.js",revision:"c6a5bb1361bed767"},{url:"/_next/static/chunks/pages/docs/feedback-988c8fd2d11b94bf.js",revision:"988c8fd2d11b94bf"},{url:"/_next/static/chunks/pages/docs/git-4357bc94419fcf6c.js",revision:"4357bc94419fcf6c"},{url:"/_next/static/chunks/pages/docs/google-sheets-441327b0aedd4949.js",revision:"441327b0aedd4949"},{url:"/_next/static/chunks/pages/docs/javascript-arrays-38eadbc514d613ad.js",revision:"38eadbc514d613ad"},{url:"/_next/static/chunks/pages/docs/javascript-caead97b32bda847.js",revision:"caead97b32bda847"},{url:"/_next/static/chunks/pages/docs/kali-linux-566464c2034e96c4.js",revision:"566464c2034e96c4"},{url:"/_next/static/chunks/pages/docs/login-ab58ca4eb00e2c3f.js",revision:"ab58ca4eb00e2c3f"},{url:"/_next/static/chunks/pages/docs/markdown-render-028146c6929ea10d.js",revision:"028146c6929ea10d"},{url:"/_next/static/chunks/pages/docs/mikrotik-17ea7a4964338a78.js",revision:"17ea7a4964338a78"},{url:"/_next/static/chunks/pages/docs/politicas-privacidad-1f989ae1e4a28eb0.js",revision:"1f989ae1e4a28eb0"},{url:"/_next/static/chunks/pages/docs/program-14570ec812e3f4f4.js",revision:"14570ec812e3f4f4"},{url:"/_next/static/chunks/pages/docs/python-84e2cd547caede94.js",revision:"84e2cd547caede94"},{url:"/_next/static/chunks/pages/docs/scalability-add3243e5803aa89.js",revision:"add3243e5803aa89"},{url:"/_next/static/chunks/pages/docs/scraping-bf1079a8a0120835.js",revision:"bf1079a8a0120835"},{url:"/_next/static/chunks/pages/docs/sql-6d2bc766c2c2e055.js",revision:"6d2bc766c2c2e055"},{url:"/_next/static/chunks/pages/docs/supabase-notes-5a30761637628362.js",revision:"5a30761637628362"},{url:"/_next/static/chunks/pages/docs/testing-6235e899eafbb70b.js",revision:"6235e899eafbb70b"},{url:"/_next/static/chunks/pages/docs/ubiquiti-dcb50cacec294f59.js",revision:"dcb50cacec294f59"},{url:"/_next/static/chunks/pages/docs/ui-ux-0275545230cc0113.js",revision:"0275545230cc0113"},{url:"/_next/static/chunks/pages/docs/user-feedback-c517f2fc7b74f824.js",revision:"c517f2fc7b74f824"},{url:"/_next/static/chunks/pages/index-96d6d9c4b5a074cf.js",revision:"96d6d9c4b5a074cf"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-1fb02396cd578973.js",revision:"1fb02396cd578973"},{url:"/_next/static/css/431944509084d071.css",revision:"431944509084d071"},{url:"/_next/static/css/46d2f1b70d0e73f2.css",revision:"46d2f1b70d0e73f2"},{url:"/_next/static/css/783706112441abb1.css",revision:"783706112441abb1"},{url:"/_next/static/css/e6989b95ce11b838.css",revision:"e6989b95ce11b838"},{url:"/fonts/CascadiaCode.ttf",revision:"1a8bb1784414dd2497f3d618840347b5"},{url:"/fonts/CascadiaCodeItalic.ttf",revision:"ce7a5fd1872c1b61d4ef9959d6c57235"},{url:"/fonts/CascadiaCodePL-SemiBold.ttf",revision:"f1985e610b2fac92d432ddffc6230fc2"},{url:"/fonts/CascadiaCodePL.ttf",revision:"31f8bee7892ee58638bd9213d7ad1d4a"},{url:"/fonts/CascadiaCodePLItalic.ttf",revision:"af9e26b6f4c36d61690ca3348ddfa925"},{url:"/fonts/CascadiaMono.ttf",revision:"0522f6e8a2a8d8313079e822f5ed728d"},{url:"/fonts/CascadiaMonoItalic.ttf",revision:"f481799db9b65aa9f7f7a15d572f31bc"},{url:"/fonts/CascadiaMonoPL.ttf",revision:"ef6ad3147eb7345ef494203a0012679f"},{url:"/fonts/CascadiaMonoPLItalic.ttf",revision:"eb50f42ed424ae992b4ab84be47f1465"},{url:"/images/404.png",revision:"fc0f5ee352c15090df7d69db2313b005"},{url:"/images/500.png",revision:"db6d4bc8b27b741941e92267d617f3bb"},{url:"/images/500andparis.png",revision:"7bf631babd667ce5474a6745083e617b"},{url:"/images/500orparis.png",revision:"52e57a015475579223769d8a97ea851f"},{url:"/images/NameError.png",revision:"845130b685dfb23dff013f1ab5b56d03"},{url:"/images/Quick-Set-Mikrotik.png",revision:"f12c5c02206ddc95710110c6f1722c13"},{url:"/images/TypeError.png",revision:"bf15e14167418a3c97d2e6ac7e4a88cb"},{url:"/images/Web-Fig-Mikrotik.png",revision:"fb223d76d5afa313693ab0fbf8ac21ff"},{url:"/images/Web-Fig-Simple-Mode-Mikrotik.png",revision:"4c0fe3d9a42aeb635c2fe3491fbc93f4"},{url:"/images/action.gif",revision:"a2d633bea04c24a5cc2bfca81cd14e29"},{url:"/images/action_success.gif",revision:"96ebf438858a2c87de3c983358caaee3"},{url:"/images/actualizar-controlador.png",revision:"0a78ce28feff2871c2abe8ea608071b8"},{url:"/images/admin.png",revision:"9b2c44247fcdacc3a9ede6dc8497e22d"},{url:"/images/administrador-d.png",revision:"b139c5b387c5d733dbb889ef650bcc27"},{url:"/images/airports.png",revision:"983152afe745540bb63cf1ed526d06e1"},{url:"/images/all.png",revision:"c77ff5b1de4bef76b03d7644ec3eed71"},{url:"/images/animation-1.mp4",revision:"adb56645c192bbd9d6f557b4931cfc60"},{url:"/images/animation-2.mp4",revision:"ca288fc2ee8cd0a45ee4a0b03c2b58e4"},{url:"/images/animation-3.mp4",revision:"6b935164454d11e951d9deebf194a2f5"},{url:"/images/animation.mp4",revision:"2bc52580cef223abc16e33f860e57b7b"},{url:"/images/api-endpoint.png",revision:"cccb6cbf528a84ca2aef703a1bc8b5d0"},{url:"/images/aplicacion-de-una-pagina-0.mp4",revision:"ecb55e6cd08eb3584421b75e83ed762d"},{url:"/images/aplicacion-de-una-pagina.mp4",revision:"3af8468949648f342f2666365df01360"},{url:"/images/box-size.svg",revision:"54473771459147c482e3a05dde79d704"},{url:"/images/branch.png",revision:"22acdf73443061a4670ce6270572abf3"},{url:"/images/buttons.gif",revision:"44ec97fbccb0d41cd3c7f6032de1bc99"},{url:"/images/canyon-effect-1.png",revision:"51993dffb265eb7f01474203f215c0d4"},{url:"/images/capitalize.png",revision:"a81a53306e0a88089db519bf1e454113"},{url:"/images/change_file.png",revision:"9267a1c08b7364ce965abda63b6878dc"},{url:"/images/client-removebg-preview.png",revision:"bff2bd054c12007e41c76dc964c3ce31"},{url:"/images/client-server-1-removebg-preview.png",revision:"0ab6452f59f684fe7e30afefc645c1f8"},{url:"/images/client-server-1.png",revision:"4f96cf46d20616883f30d805cba7ab7e"},{url:"/images/client.png",revision:"be7e97940ee569566466861b429fcafb"},{url:"/images/codes.png",revision:"3ef28424b46ed297b81d6ff8225fd392"},{url:"/images/color-header.png",revision:"f02cef1efae1dee75271554232f2da03"},{url:"/images/colors2.mp4",revision:"dd608496ea72f8f91579463fe488bea2"},{url:"/images/console.png",revision:"e36c5328f170c81c5e427ecfe3707c5e"},{url:"/images/consoleList.png",revision:"fd466c95c191d48cebc7eec328f1194e"},{url:"/images/cookie_3d_1-removebg.png",revision:"e702234673e6467325f21a07657738c3"},{url:"/images/count2.gif",revision:"3ce05227e7ab1c7c55628c53ad798d27"},{url:"/images/count2.mp4",revision:"bc8352ca8bfca5165734904af0a5a465"},{url:"/images/count3.gif",revision:"15eeeb200fcfd2eef566d32a93cbe673"},{url:"/images/count4.gif",revision:"c8d6e3736326eeb22b7e434766b6f0e9"},{url:"/images/cranyon-effect.png",revision:"e94794ed6a68a81b3fd152e2b21dc103"},{url:"/images/crayon-amarillo.png",revision:"51993dffb265eb7f01474203f215c0d4"},{url:"/images/css-2.png",revision:"f653cf04dc25bf2a7edc8c90069f9c2e"},{url:"/images/css-heading-color.png",revision:"0e513bcccf0b3315ccda178a349b3652"},{url:"/images/curr_log.png",revision:"672157941bd5f9ba1bd0e005a27d87be"},{url:"/images/dashboard-supabase-inicio.png",revision:"b61b89938d2fcbea160160292b93bd6e"},{url:"/images/descarga-driver.png",revision:"ed8bb125f675de487a421231bcd8e95a"},{url:"/images/descendent-css.png",revision:"c0bab017e2ea3cd41f331dd0d1fce3c3"},{url:"/images/dev.png",revision:"e887388c1af0fd881012e7f2004cde5c"},{url:"/images/divide0.png",revision:"79fa2b1405e4ed73e5114126f96e2b8d"},{url:"/images/dividebad.png",revision:"202be10f053781a9ca6c2fadc09e0da3"},{url:"/images/dividegood.png",revision:"04e5d8e5756eb2814c1614a72331c40e"},{url:"/images/dolar-hoy.png",revision:"467721950fc9d8c734e496626f049402"},{url:"/images/dom.png",revision:"8004c4db1b0753cc986b6a64e11928f7"},{url:"/images/driver-files.png",revision:"0f6606e5196d4d69fdffac0956030e58"},{url:"/images/driver.png",revision:"5d25606579c582b442ee5b25c4d23904"},{url:"/images/editor-sql-supabase.png",revision:"cd7eec0e3e7417e85f3f5ed16ad06c48"},{url:"/images/elegir-lista.png",revision:"f298911c5ef4ca1aebd1d524c809820c"},{url:"/images/error0.png",revision:"c32ee2dbafc0b7900d01bb5338b17a56"},{url:"/images/excel-divisas.png",revision:"5371ac62a1afcc88b444536ae708514a"},{url:"/images/exchange-2.gif",revision:"8846943c1a08974f3661f2b11512406d"},{url:"/images/exchange.png",revision:"7f9fea646ba1921df193cf598f607a53"},{url:"/images/flexbox.gif",revision:"da8cb2fec0ec26ac94d7568c980d2ec2"},{url:"/images/flight5.png",revision:"0c5a51027a4cd785ad3b6f880151ba6d"},{url:"/images/flightpage1.png",revision:"39d9d8f178250bd1034b9ed1508ec4fe"},{url:"/images/flights1.png",revision:"8f11a6b3603b982a1efe9b6752e41efd"},{url:"/images/flights2.png",revision:"64e18389143cdecf8bd9b9e857ce6d6b"},{url:"/images/flights_links.png",revision:"f4342f5a2573e8de4b861daf5538975a"},{url:"/images/flightspage0.png",revision:"bbc361e3e27cb91dbcdcc6b4ec2202b5"},{url:"/images/forgot0.png",revision:"c75bc1a07b0a5318f6d94a8388d4848b"},{url:"/images/form.png",revision:"8e1b4d68111e659d152d4646b48c0ec9"},{url:"/images/git-clone.png",revision:"012aa41bf32abb288cec5210ff247ab9"},{url:"/images/git_branch.png",revision:"b9b43d12a1c7a1acff1287e06600c536"},{url:"/images/git_log.png",revision:"d069468e19a9769260fa22d4fee09771"},{url:"/images/github-repo-1.png",revision:"3814afe7de3cbff90b6b757a142928c7"},{url:"/images/github-repo.png",revision:"fe88a414a7d8dbc548d7d9127c4d4b83"},{url:"/images/google-sheets-1.png",revision:"68637460cfa2424d96ac803da0d3c196"},{url:"/images/google-sheets-2.png",revision:"42edb62feafc5ca272f488422c5b692c"},{url:"/images/google-sheets-3.png",revision:"e350519d3b5dc48e83be8193f3651e29"},{url:"/images/google-sheets.png",revision:"0dc4dce2d8961079b1410a5a53a05b79"},{url:"/images/grid.gif",revision:"17be950b847949f25f4f889e12e339a7"},{url:"/images/hashes.png",revision:"e357c98d90b52b488d3da99d65e47a25"},{url:"/images/header/blog-placeholder-2.webp",revision:"bb810c50597a26bc89f2d64bb8ca67b6"},{url:"/images/header/blog-placeholder-3.webp",revision:"5da36c3fd0b4cac8bfbafe45e64b3007"},{url:"/images/header/blog-placeholder-4_1.webp",revision:"97f3206d964470b705d9321a013ade63"},{url:"/images/header/blog-placeholder-5_1.webp",revision:"920f3c900a08383e2076dc3f94d53339"},{url:"/images/header/different-space-449108.svg",revision:"ccc6c49f5b0f769225f4f276e7877871"},{url:"/images/header/disquet.svg",revision:"fbacf926d7cc9dfebafe7fe7186b47dd"},{url:"/images/header/hexa-header.jpg",revision:"11a97ff81c26e0458667efb584125039"},{url:"/images/header/hexa-header_1.jpg",revision:"f1bb0552b1c29d19f6fd179a71ab9c1b"},{url:"/images/header/logo-card-space-letter.png",revision:"721ae2fcbf714437b6d638f097f7b8fd"},{url:"/images/header/panal.webp",revision:"221ea403932b27ae5518685b007d5619"},{url:"/images/header/ufo-00.svg",revision:"0938c0f7c7ec25707bdcf2fa73edf14f"},{url:"/images/hide-posts.mp4",revision:"4ecc50c50f6c67336a457a43980ee683"},{url:"/images/hide0.gif",revision:"52c984ebca02c620ca9746d6d1f26571"},{url:"/images/html-elements-commit.png",revision:"a0b5f16cb3f870832bc7accb47082e9d"},{url:"/images/html-title-preview.png",revision:"d82a815a26c789860daf25976b8bd51c"},{url:"/images/icons/css-3-svgrepo-com.svg",revision:"b9c468b32ad447412f9daa53008d872e"},{url:"/images/icons/css-icon.svg",revision:"d058f3f6482aafe99ff47188ced7043a"},{url:"/images/icons/django-svgrepo-com.svg",revision:"788ccf74fdf4c5afe154e8fc9a6608fb"},{url:"/images/icons/eye.svg",revision:"0d695bb3c626621044830ea467487f99"},{url:"/images/icons/favicon-neoctecs2.png",revision:"5c43d918cbcbc5e6d29784082fada029"},{url:"/images/icons/favicon-neotecs.jpg",revision:"c9743694eaac0fdb54e5b4f641ae30fb"},{url:"/images/icons/favicon.svg",revision:"dc09b89d9ddb2207aff4ecb32cde85f9"},{url:"/images/icons/ger-art-icon.svg",revision:"bb090b4f9876b1dbd301f85fdf49fc47"},{url:"/images/icons/github-page-icon.svg",revision:"8583f766f03e14f9a22b807027741a9a"},{url:"/images/icons/python-ar21.svg",revision:"6545cb5dfd2861f7819395f730eed7d5"},{url:"/images/icons/sass-lang-ar21.svg",revision:"af5607e890bdb9a2840c87d4f7ce697f"},{url:"/images/icons/sql-database-generic-svgrepo-com.svg",revision:"690b33c2180b2ad1905d893a8622ebbe"},{url:"/images/icons/thumbs-down.svg",revision:"f213489b98fe5ac8f28942220f21970b"},{url:"/images/icons/thumbs-up.svg",revision:"718ad43ddf289b7f9d79b826639b20f2"},{url:"/images/icons/w3_css-ar21.svg",revision:"4c3d933e4466206587056fc08af8bfa0"},{url:"/images/icons/w3_html5-ar21.svg",revision:"0609200d48ba0225308a23ed44d8d36c"},{url:"/images/in.png",revision:"4ca1cf131b605bc6611c88b84ca43cc5"},{url:"/images/infscroll.gif",revision:"49bf925df90c6a7c61ff3a6a6988794d"},{url:"/images/inherit.png",revision:"d6fd9a2e2c9dc9492c174debae318e8b"},{url:"/images/inicio-kali.jpg",revision:"8aa6fe64f7fd9f60aa205a45c53a81f5"},{url:"/images/inject.gif",revision:"27428731488bcc697f08ea8085c87f8f"},{url:"/images/innerMeasures.png",revision:"2652b009821d1837ba804a2b594cb87b"},{url:"/images/installed.png",revision:"41e8a84d32be58110a937b59c41f3bc7"},{url:"/images/ip-router.png",revision:"2cff476888e652371caea30fa62a90a0"},{url:"/images/javascript-alert-count.png",revision:"b7c02a9d00a092d04f641974077497fb"},{url:"/images/javascript-alert-name.png",revision:"532a44a356da9f28cf8b7ccc61d220d0"},{url:"/images/javascript-alert-name2.png",revision:"cce9db47201fd0b70454987e8ac2350b"},{url:"/images/javascript-alert.png",revision:"ff75b2a59979eb6ae05fb885932bdcdd"},{url:"/images/join.png",revision:"1a697e8c16447a0e48e3b5793a3182b3"},{url:"/images/kali-linux-logo.png",revision:"381c05ee5e35884ae564ab50700685e0"},{url:"/images/landing.png",revision:"18f28a8ed5d67fcf91d5c8681fc2acd8"},{url:"/images/like.png",revision:"6c6e4f05abfd01c35dc57b69661826e2"},{url:"/images/links-css.png",revision:"28d2c297b96d66f7bb4fb8ea3c80ca1a"},{url:"/images/linset.webp",revision:"ebb039ef6424a2d5790c3414f94da350"},{url:"/images/login.png",revision:"78717f1bbed8be1aaa66fa21580093e5"},{url:"/images/logos/MikroTik_Logo_(2022).svg",revision:"51e8c452d1e3f6813b502fe55c1a09dd"},{url:"/images/logos/NEOTECS_LOGO_1-removebg.png",revision:"58f6f06cff94a909a54905b99a79909b"},{url:"/images/logos/NeoTecs_Tutorial_logo.png",revision:"e28f4c1621dd90ce0cbc0bd0c62958a1"},{url:"/images/logos/TP-LINK_logo.svg",revision:"3a13bfbb7f5b523fede78e97cd123377"},{url:"/images/logos/Ubiquiti_Logo.png",revision:"68c924d05b556ee7468fc759ff9c0d9a"},{url:"/images/logos/neotecs-logo.svg",revision:"3a3cfd215007d8b1c4d8cceabff6cd64"},{url:"/images/mario.png",revision:"b6b32ec307ad150d17fabedf8640dee5"},{url:"/images/migration0.png",revision:"9ce100af52191041a46f346e79218e89"},{url:"/images/migration1.png",revision:"b376530ce12bf90b36930dab4b2e88ee"},{url:"/images/mult_users.png",revision:"f58bcb86fc314c402b9aba340eeca39c"},{url:"/images/multi_primary.png",revision:"3a1374968915efb6e1e2beaab124d5a4"},{url:"/images/neo_pixelart-removebg-preview.png",revision:"66454219defc0b994ae1668e4f10ee33"},{url:"/images/neotecs.png",revision:"d6ee8be8b4047d77d0f1049b968ddc19"},{url:"/images/new_branch.png",revision:"4cc95d3f7da7dee7eb474ce9230a69fe"},{url:"/images/no_branch.png",revision:"51e7cb784c64e3b73b1f8306ff9b7a9f"},{url:"/images/panel-router-2.png",revision:"e9603b6c132901746f7eed05531ee264"},{url:"/images/panel-router-dhcp-1.png",revision:"b7cfc518a971fd0cbd7726f5648d365a"},{url:"/images/panel-router-dhcp-2.png",revision:"0f31f1397915a7dd44212111854cd25b"},{url:"/images/panel-router.png",revision:"e13382b6406ab05125f1e52ec829c773"},{url:"/images/passengers.png",revision:"6ec03d513f8512863cddae56ef1b8094"},{url:"/images/password-template.png",revision:"bb8471a155c7e088a0ae5360a05aef9b"},{url:"/images/password-template1.png",revision:"04b36b2f1a590daa001a1e9406243e5e"},{url:"/images/passwords.png",revision:"52af876f5d8b365374d211db26e349c9"},{url:"/images/pathworks.png",revision:"e2a0d03ea580b401760cfc631050e2cd"},{url:"/images/people.png",revision:"bf9f7cce63f36bfe50012fcbe4caa8c9"},{url:"/images/poe-injector-ubiquiti-poe-24-24w-g-gigabit-removebg-preview.png",revision:"eb941fafc7944abb4d2ed405ec24a697"},{url:"/images/poe-injector-ubiquiti-poe-24-24w-g-gigabit.jpg",revision:"8b8a77b9f6c45dcefab354c5d6c320d8"},{url:"/images/polls.png",revision:"85da08eaf2038549acd4f741161ee39b"},{url:"/images/project-setting.png",revision:"1abea02b448cda39bb5521b0cb6bf105"},{url:"/images/propiedades-ethernet-mikrotik.png",revision:"c6612fa475007f5b47540d71c3406f59"},{url:"/images/protocolo-ip-ubiquiti.png",revision:"2bada2843855e2073c9eeb9a4dd05865"},{url:"/images/python-console-2.png",revision:"b0c6b686dd29bed9695e42bd5328e43e"},{url:"/images/python-terminal-1.png",revision:"7c8f24b5cf8e3fd95eebeedcde2d8da3"},{url:"/images/python-terminal-error.png",revision:"c0e9dcf2d1e84f5a54e126efa70751cb"},{url:"/images/react-math.mp4",revision:"2bf4e8a407c98aefdb65e1116fc087a0"},{url:"/images/react0.png",revision:"f0ca5a1f87ded4f51da43e8185e74a95"},{url:"/images/react1.png",revision:"bb6f27975e9d5b67af4342c79f1e18b9"},{url:"/images/react2.png",revision:"d1e83d145c328c2ec6c9ba015a69684a"},{url:"/images/react3.mp4",revision:"d7745e69f5eb54efe4b78d0d11a85561"},{url:"/images/request.png",revision:"f6eff6417c044c84cc991cd3e7bebea7"},{url:"/images/response.png",revision:"82da74928b0c6be667b3bbd216cef227"},{url:"/images/responsive0.gif",revision:"6e9b4d6cd04bee497c37367d8a57675c"},{url:"/images/root_.png",revision:"10728d88c3b5d422a4efffa73014074f"},{url:"/images/router-wan-1.jpg",revision:"ebb43bfba1647fb67d0863ffda0a6154"},{url:"/images/router-wan-2.jpg",revision:"a7c7e9f735786aeb135f0d42b6defbed"},{url:"/images/scraping_project.png",revision:"692397b79c84ddf72f10e20ef5b4d952"},{url:"/images/scroll-1.mp4",revision:"831618da533ed5c3ededf3daaba7e94f"},{url:"/images/scroll.png",revision:"73fe9d72e7f2463faa3203ffef7f7e0b"},{url:"/images/sent.png",revision:"faee95e746f2cc8b08dd5c5b04747170"},{url:"/images/server0.png",revision:"67b5143a2d2abf10332e5603f3f72f45"},{url:"/images/server_cache.png",revision:"3cfce1325a87f215a06010be1a6b9bca"},{url:"/images/servers.png",revision:"84e4f6f9be9fc79fa1524e0db4a0f1b4"},{url:"/images/simple_pass.png",revision:"26424c78167060135257ed41a4ca17b1"},{url:"/images/single_primary.png",revision:"504e2cd9fa72db042cf9a3f153c0130f"},{url:"/images/singlepage3.gif",revision:"5885e0c3fc2d3f213fc66a423aa32e42"},{url:"/images/solidsnk.png",revision:"6ecb68fe3b2d0b6ea39259cfa64f3564"},{url:"/images/supa-example.png",revision:"e841e13cc5d73bf2ce0dee85d3598ebf"},{url:"/images/tabla-divisas.png",revision:"e657628a16f558c25222632f7af8917e"},{url:"/images/table-style.png",revision:"c67ce01fd8cb9a2bb6957f25f226dc9d"},{url:"/images/table-styled.png",revision:"47dd76fb79f34bf0f135fdf6c0ccaffe"},{url:"/images/tasks.mp4",revision:"032051180475d3e60415dff2ec59b364"},{url:"/images/template1.png",revision:"56b565c809b665dd20cebb6aa7aa84d4"},{url:"/images/template2.png",revision:"fd29acddbac783650161b359a0d8cdc5"},{url:"/images/templates.png",revision:"99ffcf465e462fd34e446b423062955a"},{url:"/images/teresa-link.mp4",revision:"0d0d69303e0e35fd0ae97f7141070dc8"},{url:"/images/terminal-kali.jpg",revision:"4a44339bfa574bbba7fb83cd4715d22c"},{url:"/images/tests_py.mp4",revision:"6a880f3bfe61880a689598a08493ada9"},{url:"/images/tests_py.png",revision:"6340278685e114092cb3bdccf5119b6f"},{url:"/images/toggle.mp4",revision:"57c7a8a42894371ff94d526316ecf148"},{url:"/images/ui-1.png",revision:"5423d41872ea54dfc00f34b9ef3fb136"},{url:"/images/utilizar-disco.png",revision:"373f309167d2bbf7b50c7e15957cd6ce"},{url:"/images/valueError.png",revision:"b189aae6f29cf6eed3e247fa9a7ac374"},{url:"/images/where0.png",revision:"0a3478c2e5c201e84d421b2e09011815"},{url:"/images/where1.png",revision:"a7b8ce9c8a4b1a79801d14163b1e044d"},{url:"/rufus-4.4.exe",revision:"7a4662bb7f331d2252f3d949657d821d"},{url:"/videos/colors.gif",revision:"4b1fa573a88bcb8509141737488d69f7"},{url:"/videos/responsive0.mp4",revision:"18e2da0cbf2c490d0f191b435ddd8926"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
