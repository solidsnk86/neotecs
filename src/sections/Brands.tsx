// eslint-disable-next-line import/extensions
import React from 'react';
import { ReactNode } from 'react';
import { Marquee } from '../components/magicui/marquee';

const reviews = [
    {
        name: 'Javascript',
        link: 'https://eloquentjs-es.thedojo.mx/',
        logo: (
            <svg
                width={120}
                height={60}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_1_2)">
                    <rect width="24" height="24" fill="black" />
                    <path
                        d="M0 0H24V24H0V0ZM22.034 18.276C21.859 17.181 21.146 16.261 19.031 15.403C18.295 15.058 17.477 14.818 17.234 14.263C17.143 13.933 17.129 13.753 17.188 13.558C17.338 12.912 18.103 12.718 18.703 12.898C19.093 13.018 19.453 13.318 19.679 13.798C20.713 13.122 20.713 13.122 21.434 12.673C21.164 12.253 21.03 12.072 20.848 11.893C20.218 11.188 19.379 10.828 18.014 10.859L17.309 10.948C16.633 11.113 15.989 11.473 15.599 11.953C14.459 13.244 14.788 15.494 16.168 16.424C17.533 17.444 19.529 17.668 19.784 18.629C20.024 19.799 18.914 20.174 17.818 20.039C17.007 19.859 16.558 19.453 16.063 18.703L14.233 19.754C14.443 20.234 14.683 20.443 15.043 20.863C16.783 22.619 21.133 22.529 21.914 19.859C21.943 19.769 22.154 19.154 21.988 18.209L22.034 18.276ZM13.051 11.031H10.803C10.803 12.969 10.794 14.895 10.794 16.836C10.794 18.068 10.857 19.199 10.656 19.547C10.326 20.236 9.476 20.148 9.09 20.027C8.694 19.831 8.493 19.561 8.26 19.172C8.197 19.067 8.15 18.976 8.133 18.976L6.308 20.101C6.613 20.731 7.058 21.273 7.632 21.618C8.487 22.128 9.636 22.293 10.839 22.023C11.622 21.797 12.297 21.332 12.65 20.612C13.16 19.682 13.052 18.542 13.047 17.266C13.059 15.212 13.047 13.157 13.047 11.087L13.051 11.031Z"
                        fill="#F7DF1E"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_2">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        name: 'Html5',
        link: 'https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={120}
                height={60}
                fill="#currentColor"
                className="html-icon"
            >
                <path d="M6.3 21.475H12v5.63h5.213v-5.63h5.7v17.05h-5.7v-5.7H12v5.7H6.3v-17.05zm24.107 5.655H25.38v-5.654h15.736v5.654h-5.02v11.397h-5.7V27.13zm13.207-5.655h5.943l3.656 6 3.652-6H62.8v17.05h-5.676v-8.452l-3.92 6.063h-.098L49.2 30.074v8.452h-5.576zm22.03 0h5.7V32.9h8.015v5.636H65.645z" />
                <path
                    d="M82.07 12.06h31.637l-2.882 32.288L97.87 47.94l-12.92-3.587z"
                    fill="#e44d26"
                />
                <path d="M108.36 42.293l2.463-27.592H97.9v30.494z" fill="#f16529" />
                <path
                    d="M92.65 26.678l-.362-4.056H97.9v-3.96h-9.93l1.068 11.977H97.9v-3.96zm-3.446 5.942l.555 6.22 8.113 2.252.018-.005v-4.12l-.017.005-4.4-1.2-.282-3.16h-2.143z"
                    fill="#ebebeb"
                />
                <path
                    d="M106.986 27.74l.097-1.064h-9.206v3.96h4.877l-.46 5.137-4.417 1.192v4.12l8.12-2.25.06-.67zm-9.1-5.118h9.567l.355-3.97h-9.922v3.95z"
                    fill="#fff"
                />
            </svg>
        ),
    },
    {
        name: 'Sass',
        link: 'https://sass-lang.com/documentation/',
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={120}
                height={60}
                fill="#fafafa"
            >
                <path
                    d="M87.12 34.182c-2.628.015-4.903.646-6.812 1.586-.705-1.395-1.41-2.613-1.527-3.523-.132-1.057-.294-1.703-.132-2.966s.896-3.054.896-3.2c-.015-.132-.16-.778-1.674-.793s-2.82.294-2.966.7a16.86 16.86 0 0 0-.631 2.246c-.264 1.38-3.024 6.27-4.595 8.838-.514-.998-.954-1.88-1.042-2.584-.132-1.057-.294-1.703-.132-2.966s.896-3.054.896-3.2c-.015-.132-.16-.778-1.674-.793s-2.82.294-2.966.7-.308 1.336-.63 2.246c-.308.9-3.978 9.073-4.933 11.2-.484 1.086-.9 1.953-1.22 2.54s-.015.044-.044.103l-.41.778v.015c-.206.367-.426.72-.53.72-.073 0-.22-.984.03-2.334.543-2.833 1.864-7.252 1.85-7.414 0-.073.25-.85-.85-1.248-1.072-.396-1.453.264-1.54.264s-.16.235-.16.235 1.19-4.977-2.276-4.977c-2.173 0-5.168 2.364-6.65 4.522l-7.487 4.096-.16-.176c-4.2-4.478-11.965-7.65-11.642-13.668.117-2.187.88-7.957 14.916-14.945 11.495-5.725 20.7-4.155 22.3-.66 2.276 4.99-4.918 14.27-16.868 15.606-4.55.514-6.944-1.248-7.546-1.908-.63-.7-.72-.72-.954-.587-.382.206-.147.822 0 1.19.352.925 1.82 2.57 4.316 3.39 2.187.72 7.53 1.116 13.99-1.38C65.496 23 71.148 15.23 69.49 8.725 67.8 2.104 56.82-.068 46.44 3.617 40.26 5.82 33.566 9.254 28.75 13.76c-5.725 5.344-6.636 10.012-6.254 11.95 1.336 6.915 10.864 11.422 14.68 14.754l-.53.294c-1.908.94-9.175 4.742-10.996 8.764-2.055 4.55.323 7.825 1.908 8.265 4.903 1.365 9.924-1.086 12.64-5.124 2.7-4.037 2.378-9.278 1.13-11.67l-.044-.088 1.497-.88a89.3 89.3 0 0 1 2.76-1.556c-.47 1.277-.807 2.79-.984 4.99-.206 2.584.85 5.93 2.246 7.252.617.573 1.35.587 1.806.587 1.615 0 2.35-1.336 3.156-2.936.998-1.953 1.88-4.213 1.88-4.213s-1.1 6.122 1.908 6.122c1.1 0 2.202-1.424 2.7-2.158v.015s.03-.044.088-.147c.117-.176.176-.28.176-.28v-.03c.44-.763 1.424-2.5 2.892-5.403 1.894-3.73 3.714-8.397 3.714-8.397s.176 1.145.72 3.024c.323 1.116 1.028 2.334 1.57 3.523l-.705.97.015.015c-.352.47-.75.97-1.16 1.468-1.497 1.79-3.288 3.832-3.523 4.42-.28.7-.22 1.204.323 1.615.396.294 1.1.352 1.85.294 1.35-.088 2.3-.426 2.76-.63a9.56 9.56 0 0 0 2.378-1.248c1.468-1.086 2.364-2.628 2.276-4.683-.044-1.13-.41-2.246-.866-3.303l.396-.587c2.32-3.39 4.11-7.12 4.11-7.12s.176 1.145.72 3.024c.28.954.837 1.997 1.336 3.024-2.173 1.776-3.538 3.832-4.008 5.182-.866 2.496-.19 3.626 1.086 3.9.573.117 1.395-.147 2.01-.41.763-.25 1.688-.675 2.54-1.307 1.468-1.086 2.877-2.598 2.804-4.64-.044-.94-.294-1.864-.63-2.745 1.85-.763 4.243-1.204 7.282-.837 6.533.763 7.825 4.845 7.575 6.548s-1.615 2.643-2.07 2.936c-.455.28-.602.382-.558.587.06.308.264.294.66.235.543-.088 3.435-1.395 3.553-4.536.176-4.037-3.656-8.44-10.453-8.397zM36.737 51.167c-2.158 2.364-5.197 3.26-6.49 2.496-1.395-.807-.85-4.287 1.806-6.797 1.615-1.527 3.714-2.936 5.094-3.802l1.336-.807c.088-.06.147-.088.147-.088.103-.06.22-.132.338-.206.984 3.582.044 6.724-2.23 9.205zm15.782-10.732c-.75 1.835-2.334 6.548-3.288 6.283-.822-.22-1.32-3.788-.16-7.31.587-1.776 1.835-3.9 2.57-4.713 1.19-1.32 2.48-1.762 2.804-1.218.382.705-1.453 5.814-1.923 6.96zM65.54 46.66c-.323.16-.617.28-.75.19-.103-.06.132-.28.132-.28s1.63-1.747 2.276-2.554l1.277-1.63v.176c0 2.114-2.026 3.523-2.936 4.096zm10.042-2.3c-.235-.176-.206-.72.587-2.422.308-.675 1.013-1.806 2.23-2.877.147.44.235.866.22 1.263-.015 2.643-1.894 3.626-3.04 4.037z"
                    fill="#cf649a"
                />
            </svg>

        ),
    },
    {
        name: 'Postgree SQL',
        link: 'https://sqlbolt.com/',
        logo: (

            <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#4169E1"
                width={120}
                height={60}
            >
                <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" />
            </svg>

        ),
    },
    {
        name: 'Django',
        link: 'https://www.djangoproject.com/',
        logo: (
            <svg
                width={120}
                height={60}
                viewBox="0 -166.5 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
            >
                <g>
                    <path
                        d="M386.891623,41.4228474 C398.893282,41.4228474 409.984729,42.6943288 423.439677,45.4214453 L413.851956,65.618529 C406.396664,64.1640668 413.254923,65.4238187 407.621228,64.8783954 L407.621228,67.7884927 L407.98367,79.6048247 L408.164305,94.8790231 C408.346113,98.6958133 408.346113,102.514949 408.529094,106.332913 L408.529094,113.970012 L408.529094,113.970012 C408.529094,137.970983 406.529208,149.243065 400.529552,158.515261 C391.801606,172.15319 376.710388,178.880077 355.255899,178.880077 C344.346259,178.880077 334.893428,177.243807 325.073463,173.424671 L325.073463,147.606795 L325.074636,147.606795 C334.894601,152.697412 344.712221,155.05974 355.075264,155.05974 C373.437848,155.05974 381.256755,147.606795 381.256755,129.787288 L381.256755,129.241864 L381.256755,129.241864 C375.802522,131.967808 370.347116,133.059827 363.075979,133.059827 C338.529584,133.059827 322.890597,116.877763 322.890597,91.2416948 C322.890597,59.4206435 345.983702,41.4228474 386.891623,41.4228474 Z M132.909689,43.2409251 L132.909689,108.149817 C132.909689,130.514519 131.27342,141.241177 126.36461,150.514546 C121.818243,159.425473 115.817413,165.060341 103.454485,171.242978 L77.4536283,158.878877 C89.8177295,153.061028 95.8173858,147.971583 99.635349,140.15033 C103.636293,132.150789 104.91012,122.87742 104.91012,98.5140056 L104.91012,43.2409251 L132.909689,43.2409251 Z M466.908155,40.8774241 C494.907724,40.8774241 512,58.5151235 512,87.0601161 C512,116.334686 494.182839,134.698443 465.817308,134.698443 C437.815393,134.698443 420.542482,117.060744 420.542482,88.697559 C420.543655,59.2400087 438.363162,40.8774241 466.908155,40.8774241 Z M186.914807,41.2422126 C201.278794,41.2422126 210.732798,45.0590028 214.91555,52.5142942 C217.277878,56.6958729 218.005109,62.150106 218.005109,73.788149 L218.005109,130.696327 C205.458027,132.514404 189.640751,133.788232 178.005054,133.788232 C154.550679,133.788232 144.003482,125.603363 144.003482,107.422586 C144.003482,87.7850013 158.003853,78.6946129 192.36904,75.7845156 L192.36904,69.6030515 C192.36904,64.512434 189.823732,62.6955293 182.732056,62.6955293 C172.369013,62.6955293 160.732143,65.6044536 149.821331,71.2416673 L149.821331,49.604197 L149.822504,49.604197 C162.187778,43.7875213 174.005283,41.2422126 186.914807,41.2422126 Z M88.3656132,0 L88.3656132,129.606653 C74.0016266,132.333769 63.455603,133.424616 52.0017136,133.424616 C17.8183343,133.424616 0,117.970956 0,88.3327705 C0,59.786605 18.9103538,41.2422126 48.1825775,41.2422126 C52.7277717,41.2422126 56.1821193,41.6046552 60.364871,42.6955018 L60.364871,0 L88.3656132,0 Z M275.642863,41.2422126 C290.00685,41.2422126 300.371066,44.5135795 306.554876,50.8780243 C312.372724,56.8765077 314.189629,63.4215874 314.189629,77.4243044 L314.189629,132.332596 L286.188887,132.332596 L286.188887,78.515151 C286.188887,67.7884927 282.552731,63.7863759 272.553304,63.7863759 C268.735341,63.7863759 265.280993,64.1499914 259.642607,65.7862613 L259.642607,132.332596 L231.643037,132.332596 L231.643037,47.6043115 C248.187544,43.2409251 261.8243,41.2422126 275.642863,41.2422126 Z M193.641695,94.1506191 C175.094957,95.9686968 169.0953,98.8787941 169.0953,106.151105 C169.0953,111.605338 172.550821,114.150647 180.186747,114.150647 C184.369499,114.150647 188.186289,113.788204 193.641695,112.879165 L193.641695,94.1506191 Z M466.545712,63.4227603 C455.453092,63.4227603 449.087474,72.3336869 449.087474,87.7861743 C449.088647,103.242181 455.453092,112.150761 466.360385,112.150761 C477.08939,112.150761 483.453834,103.241008 483.453834,87.7861743 C483.453834,72.5143217 477.271197,63.4227603 466.545712,63.4227603 Z M50.910867,63.7863759 C36.7286881,63.7863759 28.5461656,72.5143217 28.5461656,87.7861743 C28.5461656,102.696757 36.3650726,110.878107 50.7290592,110.878107 C53.8186183,110.878107 56.3651001,110.696299 60.364871,110.152049 L60.364871,65.2396651 C57.0923311,64.1499914 54.3652146,63.7863759 50.910867,63.7863759 Z M361.621516,67.9667816 C354.895802,71.7859177 351.439108,78.6957858 351.439108,88.5134053 C351.439108,102.514949 358.350149,110.514491 370.713078,110.514491 C374.531041,110.514491 377.622946,109.786087 381.257928,108.696414 L381.257928,99.0606018 C381.257928,95.788062 381.077294,92.1495607 381.077294,88.3327705 L380.896659,75.424419 L380.713678,66.1510498 L380.713678,63.9681836 L377.803581,63.9681836 C372.350521,63.7863759 365.987249,65.2396651 361.621516,67.9667816 Z M132.909689,0.148965075 L132.909689,28.8769384 L104.91012,28.8769384 L104.91012,0.148965075 L132.909689,0.148965075 Z"
                        fill="#092E20"
                    ></path>
                </g>
            </svg>
        ),
    },
    {
        name: 'Css',
        link: 'https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics',
        logo: (
            <svg
                width={120}
                height={60}
                viewBox="0 0 538.584 538.584"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                <path d="M0 0h538.584v538.583H0V0z" fill="none" />
                <path
                    d="M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z"
                    fill="#2062af"
                />
                <path
                    d="M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z"
                    fill="#3c9cd7"
                />
                <path d="M191.985 76.899V56.631h29.571V34.453h-51.749v62.684h51.749V76.899h-29.571zm82.766-20.268h20.674V34.453h-51.754v22.178c6.924 6.924 10.535 10.238 20.549 20.252-5.854 0-20.549.021-20.549.02v20.234h51.754V76.899l-20.674-20.268zm73.352 0h20.673V34.453H317.02v22.178c6.924 6.924 10.537 10.238 20.551 20.252-5.852 0-20.551.021-20.551.02v20.234h51.757V76.899l-20.674-20.268z" />
                <path
                    d="M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z"
                    fill="#ffffff"
                />
                <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1="-825.508"
                    y1="1338.301"
                    x2="-825.508"
                    y2="1419.102"
                    gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                >
                    <stop offset=".387" stopColor="#d1d3d4" stopOpacity="0" />
                    <stop offset="1" stopColor="#d1d3d4" />
                </linearGradient>
                <path
                    d="M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z"
                    fill="url(#a)"
                />
                <linearGradient
                    id="b"
                    gradientUnits="userSpaceOnUse"
                    x1="-724.552"
                    y1="1378.602"
                    x2="-724.552"
                    y2="1462.591"
                    gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                >
                    <stop offset=".387" stopColor="#d1d3d4" stopOpacity="0" />
                    <stop offset="1" stopColor="#d1d3d4" />
                </linearGradient>
                <path
                    d="M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z"
                    fill="url(#b)"
                />
                <linearGradient
                    id="c"
                    gradientUnits="userSpaceOnUse"
                    x1="-874.103"
                    y1="1302.263"
                    x2="-680.039"
                    y2="1302.263"
                    gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                >
                    <stop offset="0" stopColor="#e8e7e5" />
                    <stop offset="1" stopColor="#ffffff" />
                </linearGradient>
                <path
                    d="M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z"
                    fill="url(#c)"
                />
                <path
                    d="M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z"
                    opacity=".05"
                />
                <linearGradient
                    id="d"
                    gradientUnits="userSpaceOnUse"
                    x1="-883.032"
                    y1="1442.031"
                    x2="-672.341"
                    y2="1442.031"
                    gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                >
                    <stop offset="0" stopColor="#e8e7e5" />
                    <stop offset="1" stopColor="#ffffff" />
                </linearGradient>
                <path
                    d="M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z"
                    fill="url(#d)"
                />
                <path
                    d="M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z"
                    opacity=".05"
                />
            </svg>
        ),
    },
    {
        name: 'Python',
        link: 'https://python.org/',
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="60">
                <defs>
                    <linearGradient
                        id="A"
                        x1="82.651"
                        y1="-9.222"
                        x2="134.024"
                        y2="35.404"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#5a9fd4" />
                        <stop offset="1" stopColor="#306998" />
                    </linearGradient>
                    <linearGradient
                        id="B"
                        x1="141.232"
                        y1="72.494"
                        x2="122.887"
                        y2="46.288"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#ffd43b" />
                        <stop offset="1" stopColor="#ffe873" />
                    </linearGradient>
                    <radialGradient
                        id="C"
                        gradientTransform="matrix(2.382716e-8,-0.296405,1.43676,4.683673e-7,-128.544,150.5202)"
                        cx="61.519"
                        cy="132.286"
                        fx="61.519"
                        fy="132.286"
                        r="29.037"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#b8b8b8" stopOpacity=".498" />
                        <stop offset="1" stopColor="#7f7f7f" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <g transform="matrix(.281963 0 0 .281963 -17.339271 18.541234)">
                    <path
                        d="M232.618 37.297c0-12.2-3.478-18.46-10.435-18.804-2.768-.13-5.47.3-8.1 1.33-2.098.75-3.5 1.494-4.254 2.245v29.117c4.45 2.792 8.402 4.1 11.848 3.887 7.3-.482 10.94-6.4 10.94-17.776zm8.582.506c0 6.197-1.453 11.34-4.377 15.432-3.258 4.63-7.773 7.014-13.546 7.145-4.352.14-8.835-1.225-13.448-4.083V82.76l-7.463-2.662V21.36c1.225-1.502 2.8-2.792 4.7-3.887 4.442-2.588 9.84-3.92 16.2-3.985l.106.106c5.805-.073 10.28 2.3 13.423 7.144 2.93 4.434 4.4 10.117 4.4 17.065zm45.6 17.367c0 8.312-.833 14.07-2.5 17.27-1.674 3.2-4.858 5.756-9.56 7.66-3.813 1.502-7.937 2.32-12.362 2.458l-1.233-4.703c4.5-.612 7.667-1.225 9.504-1.837 3.617-1.225 6.1-3.103 7.463-5.618 1.094-2.05 1.633-5.96 1.633-11.75v-1.943a38.34 38.34 0 0 1-16.045 3.47c-3.674 0-6.916-1.15-9.708-3.47-3.135-2.523-4.703-5.724-4.703-9.602v-31.06l7.463-2.556v31.264c0 3.34 1.078 5.912 3.233 7.716s4.948 2.67 8.37 2.605c3.42-.073 7.087-1.396 10.982-3.985V14.615h7.463V55.17zm29.143 4.802l-2.458.106c-4.22 0-7.512-1.004-9.863-3.02-2.343-2.017-3.52-4.8-3.52-8.353V19.3h-5.1v-4.695h5.1V2.146l7.455-2.654v15.122h8.386v4.695h-8.386v29.2c0 2.8.75 4.785 2.254 5.944 1.3.955 3.34 1.502 6.132 1.64v3.887zm45.187-.612h-7.463V30.553c0-2.93-.686-5.454-2.05-7.56-1.576-2.384-3.764-3.576-6.573-3.576-3.42 0-7.7 1.804-12.836 5.413v34.53h-7.463V-9.497l7.463-2.352v31.362c4.768-3.47 9.978-5.2 15.636-5.2 3.952 0 7.153 1.33 9.602 3.985 2.458 2.654 3.682 5.96 3.682 9.912v31.16zm39.666-23.238c0-4.687-.9-8.557-2.662-11.62-2.107-3.73-5.38-5.7-9.806-5.903-8.18.474-12.264 6.336-12.264 17.57 0 5.152.85 9.455 2.564 12.9 2.188 4.4 5.47 6.573 9.847 6.5 8.214-.065 12.32-6.548 12.32-19.458zm8.173.05c0 6.67-1.707 12.223-5.1 16.657-3.748 4.964-8.925 7.455-15.53 7.455-6.548 0-11.652-2.5-15.334-7.455-3.34-4.434-5.005-9.986-5.005-16.657 0-6.27 1.805-11.546 5.413-15.84 3.813-4.556 8.827-6.842 15.024-6.842s11.243 2.286 15.13 6.842c3.6 4.295 5.413 9.57 5.413 15.84zm42.785 23.188h-7.463V28.92c0-3.34-1.004-5.944-3.013-7.822-2-1.87-4.687-2.776-8.026-2.703-3.544.065-6.916 1.225-10.117 3.47V59.36h-7.463V20.943c4.295-3.127 8.247-5.17 11.856-6.124 3.405-.9 6.4-1.33 8.998-1.33 1.772 0 3.438.17 5.005.514 2.93.678 5.315 1.935 7.153 3.78 2.05 2.04 3.07 4.5 3.07 7.357v34.22z"
                        fill="#646464"
                    />
                    <path
                        d="M128.657-9.22c-3.84.018-7.507.345-10.733.916-9.505 1.68-11.23 5.194-11.23 11.675v8.56h22.46v2.853h-30.9c-6.528 0-12.244 3.924-14.03 11.387-2.062 8.555-2.154 13.894 0 22.827 1.597 6.65 5.41 11.387 11.937 11.387h7.723V50.124c0-7.414 6.414-13.953 14.03-13.953h22.435c6.245 0 11.23-5.142 11.23-11.414V3.37c0-6.087-5.135-10.66-11.23-11.675-3.858-.642-7.862-.934-11.702-.916zM116.5-2.337c2.32 0 4.215 1.926 4.215 4.293 0 2.36-1.895 4.267-4.215 4.267-2.328 0-4.215-1.908-4.215-4.267 0-2.368 1.886-4.293 4.215-4.293z"
                        fill="url(#A)"
                    />
                    <path
                        d="M154.4 14.784v9.974c0 7.733-6.556 14.24-14.03 14.24h-22.435c-6.145 0-11.23 5.26-11.23 11.414V71.8c0 6.087 5.293 9.667 11.23 11.414 7.1 2.09 13.928 2.468 22.435 0 5.655-1.637 11.23-4.932 11.23-11.414v-8.56h-22.435v-2.853h33.665c6.528 0 8.96-4.553 11.23-11.387 2.345-7.036 2.245-13.802 0-22.827-1.613-6.498-4.694-11.387-11.23-11.387h-8.43zm-12.618 54.163c2.328 0 4.215 1.908 4.215 4.267 0 2.368-1.886 4.293-4.215 4.293-2.32 0-4.215-1.926-4.215-4.293 0-2.36 1.895-4.267 4.215-4.267z"
                        fill="url(#B)"
                    />
                    <path
                        d="M466.287 7.96h1.308V-.245h3.1v-.978h-7.508v.978h3.1V7.96m5.568 0h1.118V.466L475.4 7.96h1.245l2.528-7.47v7.47h1.22v-9.184h-1.613l-2.763 7.868-2.356-7.868h-1.804V7.96"
                        fill="#646464"
                    />
                    <path
                        transform="matrix(.614922 0 0 .678138 91.579792 8.0448)"
                        d="M110.467 132.286c0 4.753-21.915 8.607-48.948 8.607s-48.948-3.853-48.948-8.607 21.915-8.607 48.948-8.607 48.948 3.853 48.948 8.607z"
                        opacity=".444"
                        fill="url(#C)"
                    />
                </g>
            </svg>
        ),
    },
    {
        name: 'Sql',
        link: 'https://developer.mozilla.org/es/docs/Glossary/SQL',
        logo: (
            <figure>
                <img
                    src="/images/icons/sql-database-generic-svgrepo-com.svg"
                    className="h-[60px]"
                    alt="Imagen de logo SQL"
                />
            </figure>
        )
    }
];

const ReviewCard = ({
    name,
    logo,
    link,
}: {
    name: string
    logo: string | ReactNode;
    link: string;
}) => {
    return (
        <a
            href={link}
            target="_blank"
            title={`Ver la documentación de ${name}`}
            rel="noopener noreferrer"
            className="relative min-w-[250px] flex justify-center items-center overflow-hidden rounded-xl bg-zinc-800/50 w-full py-4 px-14 group review-cards duration-300"
        >
            <div className="flex flex-row items-center justify-center w-full h-auto gap-4">
                {logo}
            </div>
        </a>
    );
};

export const MarqueeLogos = () => {
    return (
        <section className="flex flex-col flex-wrap items-center justify-center my-48">
            <div className="mb-10 relative">
                <p className="text-xl font-bold text-center text-text-primary languages">
                    Lenguajes que vas aprender a continuación
                </p>
            </div>
            <div className='relative flex flex-col items-center justify-center w-full h-full gap-4 py-20 overflow-hidden bg-background'>
                <Marquee pauseOnHover className='[--duration:40s]'>
                    {reviews.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className='[--duration:40s]'>
                    {reviews.slice()
                        .reverse()
                        .map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                </Marquee>
                <span className='brands-shadow-left'></span>
                <span className='brands-shadow-right'></span>
            </div>
        </section>
    );
};
