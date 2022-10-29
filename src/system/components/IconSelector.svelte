<script lang="ts">
    import { eIcons } from "../../consts/enums";

    export let iconName: eIcons = eIcons.logo;
    export let iconColor = "var(--accent)";
</script>

<div id="icon-selector">
    {#if iconName === eIcons.logo}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 836 879"
            fill={iconColor}
        >
            <path
                d="M836,723.38,746.15,879c-91.55-65-201.94-97.48-314-90.64A495.2,495.2,0,0,0,182.26,879L341.42,604.53c77-20.52,158.3-10.26,228.46,28.21-41.07-70.11-81.29-141.08-122.36-211.2-9.41-17.1-19.68-33.34-29.09-50.44L124.07,879H90.7L0,723.38,418.43,0Z"
            />
        </svg>
    {/if}
    {#if iconName === eIcons.browser}
        <svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M33 16.5C33 14.3332 32.5732 12.1876 31.744 10.1857C30.9148 8.18385 29.6994 6.3649 28.1673 4.83274C26.6351 3.30057 24.8161 2.08519 22.8143 1.25599C20.8124 0.426785 18.6668 0 16.5 0C12.1239 0 7.92709 1.73839 4.83274 4.83274C1.73839 7.92709 0 12.1239 0 16.5C0 20.8761 1.73839 25.0729 4.83274 28.1673C7.92709 31.2616 12.1239 33 16.5 33C20.8761 33 25.0729 31.2616 28.1673 28.1673C31.2616 25.0729 33 20.8761 33 16.5V16.5ZM29.5845 14.85H24.75C24.4779 10.9694 23.1483 7.23748 20.9055 4.059C23.2097 4.87735 25.2412 6.31962 26.7737 8.22499C28.3062 10.1304 29.2793 12.424 29.5845 14.85V14.85ZM11.682 18.15H21.45C21.0277 22.2265 19.2902 26.0548 16.5 29.0565C13.7116 26.0673 12.014 22.2243 11.682 18.15V18.15ZM11.682 14.85C12.0663 10.794 13.757 6.97243 16.5 3.96C19.3128 6.9401 21.0542 10.7713 21.45 14.85H11.682ZM12.276 4.0095C10.0214 7.20559 8.67042 10.9506 8.3655 14.85H3.4155C3.72719 12.394 4.7233 10.0751 6.29007 8.15822C7.85685 6.24133 9.93112 4.8037 12.276 4.0095V4.0095ZM3.4155 18.15H8.3655C8.63724 22.0461 9.979 25.7916 12.243 28.974C9.90656 28.1759 7.84078 26.7386 6.28034 24.8252C4.71991 22.9119 3.72738 20.5992 3.4155 18.15V18.15ZM20.823 28.9575C23.0809 25.7741 24.4376 22.0403 24.75 18.15H29.6175C29.3055 20.5924 28.3165 22.8988 26.7624 24.8087C25.2083 26.7185 23.151 28.1556 20.823 28.9575V28.9575Z"
                fill={iconColor}
            />
        </svg>
    {/if}
    {#if iconName === eIcons.arrowRight}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={iconColor}
        >
            <g data-name="Layer 2">
                <g data-name="arrow-forward">
                    <rect
                        width="24"
                        height="24"
                        transform="rotate(-90 12 12)"
                        opacity="0"
                    />
                    <path
                        d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"
                    />
                </g>
            </g>
        </svg>
    {/if}
    {#if iconName === eIcons.browserColored}
        <svg version="1.1" viewBox="0 0 16.933 16.933" id="svg20">
            <metadata id="metadata26">
                <rdf:RDF>
                    <cc:Work rdf:about="">
                        <dc:format>image/svg+xml</dc:format>
                        <dc:type
                            rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                        />
                        <dc:title />
                    </cc:Work>
                </rdf:RDF>
            </metadata>
            <defs id="defs24">
                <linearGradient
                    xlink:href="#linearGradient853"
                    id="linearGradient855"
                    x1="205.12303"
                    y1="159.5856"
                    x2="222.19002"
                    y2="223.28046"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.18959583,0,0,0.18959583,-30.632487,-27.569745)"
                />
                <linearGradient id="linearGradient853">
                    <stop
                        style="stop-color:#77ede2;stop-opacity:1;"
                        offset="0"
                        id="stop849"
                    />
                    <stop
                        style="stop-color:#1917bc;stop-opacity:1"
                        offset="1"
                        id="stop851"
                    />
                </linearGradient>
                <linearGradient
                    xlink:href="#linearGradient861"
                    id="linearGradient863"
                    x1="167.8353"
                    y1="216.04416"
                    x2="243.31377"
                    y2="169.18932"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.18959583,0,0,0.18959583,-30.632487,-27.569745)"
                />
                <linearGradient id="linearGradient861">
                    <stop
                        style="stop-color:#bdbdef;stop-opacity:1"
                        offset="0"
                        id="stop857"
                    />
                    <stop
                        style="stop-color:#9996e6;stop-opacity:1"
                        offset="0.05650956"
                        id="stop871"
                    />
                    <stop
                        style="stop-color:#766eed;stop-opacity:1"
                        offset="0.17447889"
                        id="stop873"
                    />
                    <stop
                        style="stop-color:#7786ef;stop-opacity:1"
                        offset="0.27897188"
                        id="stop869"
                    />
                    <stop
                        style="stop-color:#5773f4;stop-opacity:1"
                        offset="0.54486555"
                        id="stop865"
                    />
                    <stop
                        style="stop-color:#6aa6e5;stop-opacity:1"
                        offset="0.77966058"
                        id="stop867"
                    />
                    <stop
                        style="stop-color:#8ee0f2;stop-opacity:1"
                        offset="1"
                        id="stop859"
                    />
                </linearGradient>
            </defs>
            <sodipodi:namedview
                pagecolor="#ffffff"
                bordercolor="#666666"
                borderopacity="1"
                objecttolerance="10"
                gridtolerance="10"
                guidetolerance="10"
                inkscape:pageopacity="0"
                inkscape:pageshadow="2"
                inkscape:window-width="1920"
                inkscape:window-height="1028"
                id="namedview22"
                showgrid="false"
                inkscape:zoom="1.7734375"
                inkscape:cx="-117.24705"
                inkscape:cy="7.2278111"
                inkscape:window-x="0"
                inkscape:window-y="24"
                inkscape:window-maximized="1"
                inkscape:current-layer="svg20"
                inkscape:document-rotation="0"
            />
            <circle
                cx="-330.35"
                cy="-328.38"
                r="0"
                fill="#5e4aa6"
                stroke-width=".26458"
                id="circle2"
            />
            <circle
                cx="-65.741"
                cy="5.3371"
                r="0"
                fill="#5e4aa6"
                fill-rule="evenodd"
                stroke-width=".40965"
                id="circle4"
            />
            <circle
                style="fill:url(#linearGradient855);fill-opacity:1;stroke-width:0.166677;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:0.992157"
                id="path837"
                cx="8.0173588"
                cy="8.553668"
                r="7.3567905"
            />
            <path
                id="path875"
                style="fill:#ffffff;fill-opacity:0.16683;stroke:none;stroke-width:0.189596px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                d="M 7.8088088,1.1999412 A 7.3567911,7.3567911 0 0 0 0.66267465,8.3953247 c 0.0484378,-0.00596 0.0969783,-0.014216 0.14553004,-0.026662 C 1.15646,8.7984404 1.8584631,7.0072151 2.3205272,8.0883437 c 0.4005572,0.6755907 0.1641805,1.4114687 0.4632509,2.0951813 0.5447884,0.504564 1.6335386,0.198993 1.9103997,1.113876 0.3569123,0.918995 1.3766668,-0.509071 1.4323378,0.51028 0.051818,0.84858 -0.5649217,1.859133 0.378822,2.426975 0.5852652,0.464428 1.2693364,0.864538 2.0340807,0.906505 0.5688462,0.08768 1.8297437,0.348448 1.7870887,-0.51139 0.204749,-0.894197 -0.05638,-1.838197 -0.6935794,-2.505482 C 9.0942116,11.588388 8.4408436,11.182615 7.705864,10.983382 7.2850523,10.668777 6.8487334,9.8791324 6.3272198,10.519761 5.5952093,10.402984 5.3170873,8.5765061 6.286487,8.7797004 6.8746095,8.5659156 7.436746,8.0708544 8.007291,8.7119356 8.7780265,8.7251327 9.3633182,7.8234019 9.388897,7.1225893 9.5410267,6.5167902 9.8315976,6.1281567 10.526841,6.0938835 10.905079,5.9152197 10.06744,6.0005644 10.11062,5.6509991 9.5195452,5.2900276 8.6688497,6.6332914 8.2665045,5.5558314 7.8663398,4.8878853 9.1734984,4.7635541 8.523496,4.013513 8.4057095,3.1347629 9.1993406,2.9415135 9.8477035,2.8574239 10.0377,2.3347385 9.043231,2.3089612 9.1807852,1.7365126 8.7836387,1.4109651 8.3072961,1.2668079 7.8088088,1.1999412 Z m 6.5099492,4.4569827 c -0.727252,0.1449972 -0.321879,0.9472209 -0.528794,1.364201 0.27811,0.811781 -0.813049,0.8368113 -1.077215,1.3975296 -0.50252,0.4354609 -0.76931,1.5473939 0.01815,1.9266935 0.467306,0.531395 1.458439,0.594379 1.53121,1.395306 0.05091,0.1014 0.106271,0.256255 0.167747,0.419184 A 7.3567911,7.3567911 0 0 0 15.374125,8.5538154 7.3567911,7.3567911 0 0 0 14.859403,5.8505923 C 14.784388,5.7998185 14.709331,5.7492059 14.630556,5.7035816 l -0.158491,-0.043325 z"
            />
            <path
                id="path839"
                style="fill:url(#linearGradient863);fill-opacity:1;stroke-width:0.16958;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:0.992157"
                d="m 13.197849,3.3326137 c 0.414416,0.4112238 0.777714,0.8729257 1.085362,1.3727193 0.323092,0.06421 0.549193,0.1945006 0.670251,0.3862275 0.64624,1.0250556 -1.083433,3.6729269 -5.1831858,6.0091525 C 5.4043128,13.588637 2.3915365,13.643045 1.7450754,12.617995 1.6741629,12.505402 1.6398308,12.372287 1.6425022,12.22029 1.4327579,11.856432 1.2521319,11.474252 1.1063005,11.074568 c -0.43532527,1.179079 -0.3832471,2.222314 0.1492328,2.989466 1.1790907,1.633 5.7009797,0.925007 9.8322447,-1.676566 4.131126,-2.6014936 6.56853,-5.669585 5.12842,-7.7443471 -0.55852,-0.8044722 -1.616547,-1.2638458 -3.018349,-1.3105072 z"
            />
        </svg>
    {/if}
    {#if iconName === eIcons.mailColored}
        <svg version="1.1" viewBox="0 0 16.933 16.933" id="svg14">
            <metadata id="metadata20">
                <rdf:RDF>
                    <cc:Work rdf:about="">
                        <dc:format>image/svg+xml</dc:format>
                        <dc:type
                            rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                        />
                    </cc:Work>
                </rdf:RDF>
            </metadata>
            <defs id="defs18">
                <linearGradient
                    xlink:href="#linearGradient933"
                    id="linearGradient935"
                    x1="599.05298"
                    y1="133.43138"
                    x2="599.05298"
                    y2="162.8109"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.20034665,0,0,0.20034665,-114.55099,-23.866789)"
                />
                <linearGradient id="linearGradient933">
                    <stop
                        style="stop-color:#d4e4e8;stop-opacity:1"
                        offset="0"
                        id="stop929"
                    />
                    <stop
                        style="stop-color:#afa0d4;stop-opacity:1"
                        offset="1"
                        id="stop931"
                    />
                </linearGradient>
                <radialGradient
                    xlink:href="#linearGradient964"
                    id="radialGradient968"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.31443986,0,0,0.32054719,-184.5699,-42.430728)"
                    cx="613.69922"
                    cy="154.44141"
                    fx="613.69922"
                    fy="154.44141"
                    r="33.728516"
                />
                <linearGradient id="linearGradient964">
                    <stop
                        style="stop-color:#78cbdd;stop-opacity:1;"
                        offset="0"
                        id="stop960"
                    />
                    <stop
                        style="stop-color:#78cbdd;stop-opacity:0"
                        offset="0.58066148"
                        id="stop970"
                    />
                    <stop
                        style="stop-color:#78cbdd;stop-opacity:0.97292554"
                        offset="1"
                        id="stop962"
                    />
                </linearGradient>
                <radialGradient
                    xlink:href="#linearGradient943"
                    id="radialGradient947"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.51033633,0,0,0.07980211,-303.20004,-5.2497096)"
                    cx="609.67871"
                    cy="144.82834"
                    fx="609.67871"
                    fy="144.82834"
                    r="33.728474"
                />
                <linearGradient id="linearGradient943">
                    <stop
                        style="stop-color:#78d0f4;stop-opacity:1;"
                        offset="0"
                        id="stop939"
                    />
                    <stop
                        style="stop-color:#78d0f4;stop-opacity:0.09411765;"
                        offset="0.83895504"
                        id="stop953"
                    />
                    <stop
                        style="stop-color:#78d0f4;stop-opacity:0.06666667;"
                        offset="0.89387101"
                        id="stop951"
                    />
                    <stop
                        style="stop-color:#78d0f4;stop-opacity:0.03921569;"
                        offset="0.9390406"
                        id="stop949"
                    />
                    <stop
                        style="stop-color:#78d0f4;stop-opacity:0;"
                        offset="1"
                        id="stop941"
                    />
                </linearGradient>
                <radialGradient
                    xlink:href="#linearGradient983"
                    id="radialGradient987"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.37424408,0,0,0.350111,-221.10077,-45.100983)"
                    cx="614.06445"
                    cy="124.31505"
                    fx="614.06445"
                    fy="124.31505"
                    r="33.728474"
                />
                <linearGradient id="linearGradient983">
                    <stop
                        style="stop-color:#78d0f4;stop-opacity:0.06335539"
                        offset="0"
                        id="stop979"
                    />
                    <stop
                        style="stop-color:#72c6e8;stop-opacity:0"
                        offset="0.80000007"
                        id="stop989"
                    />
                    <stop
                        style="stop-color:#132127;stop-opacity:1"
                        offset="1"
                        id="stop981"
                    />
                </linearGradient>
                <linearGradient
                    xlink:href="#linearGradient851"
                    id="linearGradient853"
                    x1="613.71448"
                    y1="201.44609"
                    x2="613.71448"
                    y2="170.70773"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.20034665,0,0,0.20034665,-114.55099,-23.866789)"
                />
                <linearGradient id="linearGradient851">
                    <stop
                        style="stop-color:#004cf0;stop-opacity:1"
                        offset="0"
                        id="stop847"
                    />
                    <stop
                        style="stop-color:#0fc9df;stop-opacity:1"
                        offset="1"
                        id="stop849"
                    />
                </linearGradient>
                <radialGradient
                    xlink:href="#linearGradient863"
                    id="radialGradient865"
                    cx="595.25006"
                    cy="180.83644"
                    fx="595.25006"
                    fy="180.83644"
                    r="10.552633"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.18333669,0,0,0.18333669,-100.74526,-21.978232)"
                />
                <linearGradient id="linearGradient863">
                    <stop
                        style="stop-color:#000000;stop-opacity:1;"
                        offset="0"
                        id="stop859"
                    />
                    <stop
                        style="stop-color:#000000;stop-opacity:0.90980392;"
                        offset="0.56770003"
                        id="stop867"
                    />
                    <stop
                        style="stop-color:#000000;stop-opacity:0.77647059;"
                        offset="0.67416817"
                        id="stop903"
                    />
                    <stop
                        style="stop-color:#000000;stop-opacity:0.63137255;"
                        offset="0.77027273"
                        id="stop905"
                    />
                    <stop
                        style="stop-color:#000000;stop-opacity:0.55294118;"
                        offset="0.81048203"
                        id="stop911"
                    />
                    <stop
                        style="stop-color:#000000;stop-opacity:0.30980392;"
                        offset="0.89872938"
                        id="stop909"
                    />
                    <stop
                        style="stop-color:#000000;stop-opacity:0.01568627;"
                        offset="0.98601139"
                        id="stop871"
                    />
                    <stop
                        style="stop-color:#000000;stop-opacity:0;"
                        offset="1"
                        id="stop861"
                    />
                </linearGradient>
                <radialGradient
                    xlink:href="#linearGradient919"
                    id="radialGradient923"
                    gradientUnits="userSpaceOnUse"
                    cx="539.07202"
                    cy="177.28905"
                    fx="539.07202"
                    fy="177.28905"
                    r="3.2800052"
                    gradientTransform="matrix(0.31478468,0,0,0.25274153,-161.29646,-33.701419)"
                />
                <linearGradient id="linearGradient919">
                    <stop
                        style="stop-color:#0db9e1;stop-opacity:1"
                        offset="0"
                        id="stop915"
                    />
                    <stop
                        style="stop-color:#0cb2db;stop-opacity:1;"
                        offset="0.60000199"
                        id="stop925"
                    />
                    <stop
                        style="stop-color:#04506b;stop-opacity:1"
                        offset="1"
                        id="stop917"
                    />
                </linearGradient>
                <linearGradient
                    xlink:href="#linearGradient999"
                    id="linearGradient1001"
                    x1="520.56573"
                    y1="127.39731"
                    x2="520.56573"
                    y2="131.29239"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.20034665,0,0,0.20034665,-95.934257,-22.096375)"
                />
                <linearGradient id="linearGradient999">
                    <stop
                        style="stop-color:#b7cfcf;stop-opacity:1"
                        offset="0"
                        id="stop995"
                    />
                    <stop
                        style="stop-color:#ffffff;stop-opacity:0.82951307"
                        offset="1"
                        id="stop997"
                    />
                </linearGradient>
                <linearGradient
                    xlink:href="#linearGradient1013"
                    id="linearGradient1007"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.20034665,0,0,0.20034665,-95.934257,-20.267316)"
                    x1="520.56573"
                    y1="127.39731"
                    x2="520.56573"
                    y2="131.29239"
                />
                <linearGradient id="linearGradient1013">
                    <stop
                        style="stop-color:#c8e2e2;stop-opacity:1"
                        offset="0"
                        id="stop1009"
                    />
                    <stop
                        style="stop-color:#ffffff;stop-opacity:1"
                        offset="1"
                        id="stop1011"
                    />
                </linearGradient>
                <linearGradient
                    xlink:href="#linearGradient1013"
                    id="linearGradient1017"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0.20034665,0,0,0.20034665,-95.934257,-18.312362)"
                    x1="520.56573"
                    y1="127.39731"
                    x2="520.56573"
                    y2="131.29239"
                />
            </defs>
            <sodipodi:namedview
                pagecolor="#ffffff"
                bordercolor="#666666"
                borderopacity="1"
                objecttolerance="10"
                gridtolerance="10"
                guidetolerance="10"
                inkscape:pageopacity="0"
                inkscape:pageshadow="2"
                inkscape:window-width="1920"
                inkscape:window-height="1028"
                id="namedview16"
                showgrid="false"
                inkscape:zoom="5.0160387"
                inkscape:cx="32"
                inkscape:cy="32"
                inkscape:window-x="0"
                inkscape:window-y="24"
                inkscape:window-maximized="1"
                inkscape:current-layer="svg14"
            />
            <path
                id="rect837"
                style="fill:#00a0ff;fill-opacity:1;stroke-width:0.260451;stroke-linecap:square"
                d="m 2.8560296,4.6888695 c -1.3381834,0 -2.41550742,1.077324 -2.41550742,2.4155074 v 0.6335181 3.133939 2.618983 c 0,1.689115 1.35991102,3.049026 3.04902562,3.049026 h 9.7954642 c 1.689115,0 3.049026,-1.359911 3.049026,-3.049026 V 10.871834 7.737895 7.1043769 c 0,-1.3381834 -1.077324,-2.4155074 -2.415507,-2.4155074 H 13.285012 3.4895478 Z"
            />
            <rect
                style="fill:url(#linearGradient935);fill-opacity:1;stroke:none;stroke-width:0.260451;stroke-linecap:square"
                id="rect927"
                width="13.514773"
                height="11.928922"
                x="1.6441363"
                y="1.110588"
                rx="2.1191614"
                ry="2.1191614"
            />
            <path
                id="rect955"
                style="fill:url(#radialGradient968);fill-opacity:1;stroke:none;stroke-width:0.260451;stroke-linecap:square"
                d="m 3.7634898,1.1104118 c -1.1740154,0 -2.119293,0.9452776 -2.119293,2.1192929 v 7.6906503 c 0,1.174016 0.9452776,2.119291 2.119293,2.119291 h 9.2762062 c 1.174015,0 2.119291,-0.945275 2.119291,-2.119291 V 3.2297047 c 0,-1.1740153 -0.945276,-2.1192929 -2.119291,-2.1192929 z M 3.9274454,1.255585 H 12.87574 c 1.174016,0 2.1189,0.9448849 2.1189,2.1189002 v 7.4010878 c 0,1.174015 -0.944884,2.1189 -2.1189,2.1189 H 3.9274454 c -1.1740153,0 -2.1192929,-0.944885 -2.1192929,-2.1189 V 3.3744852 c 0,-1.1740153 0.9452776,-2.1189002 2.1192929,-2.1189002 z"
            />
            <rect
                style="fill:url(#radialGradient947);fill-opacity:1;stroke:none;stroke-width:0.260451;stroke-linecap:square"
                id="rect937"
                width="13.514773"
                height="11.928922"
                x="1.6441363"
                y="1.110588"
                rx="2.1191614"
                ry="2.1191614"
            />
            <rect
                style="opacity:0.231918;fill:url(#radialGradient987);fill-opacity:1;stroke:none;stroke-width:0.260451;stroke-linecap:square"
                id="rect977"
                width="13.514773"
                height="11.928922"
                x="1.6441363"
                y="1.110588"
                rx="2.1191614"
                ry="2.1191614"
            />
            <path
                id="path842"
                style="fill:url(#linearGradient853);fill-opacity:1;stroke:none;stroke-width:0.200347px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                d="M 16.334038,7.3516808 8.511519,10.992745 0.44052218,7.3837663 v 0.3541287 3.133939 2.618983 c 0,1.689115 1.35991102,3.049026 3.04902562,3.049026 h 9.7954642 c 1.689115,0 3.049026,-1.359911 3.049026,-3.049026 V 10.871834 7.737895 Z"
            />
            <circle
                style="opacity:0.542438;fill:url(#radialGradient865);fill-opacity:1;stroke:none;stroke-width:0.293436;stroke-linecap:square"
                id="circle857"
                cx="8.3859282"
                cy="11.175725"
                r="1.9346849"
            />
            <circle
                style="fill:#e0f0f8;fill-opacity:1;stroke:none;stroke-width:0.260451;stroke-linecap:square"
                id="path855"
                cx="8.3872852"
                cy="10.9886"
                r="1.7172096"
            />
            <circle
                style="opacity:0.542438;fill:url(#radialGradient923);fill-opacity:1;stroke:none;stroke-width:0.260451;stroke-linecap:square"
                id="path913"
                cx="8.3872852"
                cy="10.9886"
                r="0.65713805"
            />
            <rect
                style="fill:url(#linearGradient1001);fill-opacity:1;stroke:none;stroke-width:0.260451;stroke-linecap:square"
                id="rect993"
                width="8.6362638"
                height="0.83486998"
                x="4.1010242"
                y="3.4199901"
                rx="0.41743499"
                ry="0.41743499"
            />
            <rect
                style="fill:url(#linearGradient1007);fill-opacity:1;stroke:none;stroke-width:0.260451;stroke-linecap:square"
                id="rect1003"
                width="6.7311058"
                height="0.83487046"
                x="4.1010242"
                y="5.2490487"
                rx="0.41743499"
                ry="0.41743499"
            />
            <rect
                style="fill:url(#linearGradient1017);fill-opacity:1;stroke:none;stroke-width:0.260451;stroke-linecap:square"
                id="rect1015"
                width="4.7559671"
                height="0.83487046"
                x="4.1010242"
                y="7.2040033"
                rx="0.41743499"
                ry="0.41743499"
            />
        </svg>
    {/if}
    {#if iconName === eIcons.mail}
        <svg
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                class="ColorScheme-Text"
                d="m2 2c-1.108 0-2 0.892-2 2v8c0 1.108 0.892 2 2 2h12c1.108 0 2-0.892 2-2v-8c0-1.108-0.892-2-2-2zm0 1h12c0.48888 0 0.87448 0.35406 0.96289 0.81641l-6.4238 5.1152c-0.30559 0.24335-0.77254 0.24335-1.0781 0l-6.4238-5.1152c0.088406-0.46235 0.47401-0.81641 0.96289-0.81641zm-1 2.0488 3.7051 2.9512-3.7051 2.9512v-5.9023zm14 0v5.9023l-3.7051-2.9512 3.7051-2.9512zm-9.502 3.584 1.1699 0.93164c0.73087 0.58201 1.9332 0.58201 2.6641 0l1.1699-0.93164 4.4609 3.5508c-0.08841 0.46235-0.47401 0.81641-0.96289 0.81641h-12c-0.48888 0-0.87448-0.35406-0.96289-0.81641l4.4609-3.5508z"
                color="var(--accent)"
                fill="var(--accent)"
            />
        </svg>
    {/if}
    {#if iconName === eIcons.plus}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 17">
            <defs id="defs3051">
            <style type="text/css" id="current-color-scheme">
                .ColorScheme-Text {
                color: var(--accent);
                }
                </style>
            </defs>
            <path style="fill:currentColor;fill-opacity:1;stroke:none" 
                d="M 7 3.0058594 L 7 8 L 2 8 L 2 8.9980469 L 7 8.9980469 L 7 14.007812 L 8 14.007812 L 8 8.9980469 L 13 8.9980469 L 13 8 L 8 8 L 8 3.0058594 L 7 3.0058594 z "
                class="ColorScheme-Text"
                />
        </svg>
    {/if}
    {#if iconName === eIcons.list}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <defs id="defs3051">
                <style type="text/css" id="current-color-scheme">
                    .ColorScheme-Text {
                        color: var(--accent);
                    }
                </style>
            </defs>
            <path
                style="fill:currentColor;fill-opacity:1;stroke:none"
                d="M 2 2 L 2 7 L 7 7 L 7 2 L 2 2 z M 8 2 L 8 3 L 14 3 L 14 2 L 8 2 z M 3 3 L 6 3 L 6 6 L 3 6 L 3 3 z M 8 5 L 8 6 L 14 6 L 14 5 L 8 5 z M 2 9 L 2 14 L 7 14 L 7 9 L 2 9 z M 8 9 L 8 10 L 12 10 L 12 9 L 8 9 z M 8 12 L 8 13 L 12 13 L 12 12 L 8 12 z "
                class="ColorScheme-Text"
            />
        </svg>
    {/if}
    {#if iconName === eIcons.mailList}
        <svg
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                class="ColorScheme-Text"
                d="m2 4c-1.108 0-2 0.892-2 2v8c0 1.108 0.892 2 2 2h12c1.108 0 2-0.892 2-2v-8c0-1.108-0.892-2-2-2zm0 1h12c0.48888 0 0.87448 0.35406 0.96289 0.81641l-6.4238 5.1152c-0.30559 0.24335-0.77254 0.24335-1.0781 0l-6.4238-5.1152c0.088406-0.46235 0.47401-0.81641 0.96289-0.81641zm-1 2.0488 3.7051 2.9512-3.7051 2.9512v-5.9023zm14 0v5.9023l-3.7051-2.9512 3.7051-2.9512zm-9.502 3.584 1.1699 0.93164c0.73087 0.58201 1.9332 0.58201 2.6641 0l1.1699-0.93164 4.4609 3.5508c-0.08841 0.46235-0.47401 0.81641-0.96289 0.81641h-12c-0.48888 0-0.87448-0.35406-0.96289-0.81641l4.4609-3.5508z"
                fill="var(--accent)"
            />
            <path
                d="m3.5 0c-0.277 0-0.5 0.223-0.5 0.5s0.223 0.5 0.5 0.5h9c0.277 0 0.5-0.223 0.5-0.5s-0.223-0.5-0.5-0.5h-9zm-1 2c-0.277 0-0.5 0.223-0.5 0.5s0.223 0.5 0.5 0.5h11c0.277 0 0.5-0.223 0.5-0.5s-0.223-0.5-0.5-0.5h-11z"
                fill="var(--accent)"
            />
        </svg>
    {/if}
    {#if iconName === eIcons.info}
        <svg
            version="1.1"
            viewBox="0 0 16.933 16.933"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <path
                d="m3.9687 1.0583c-0.87946 1.7e-6 -1.5875 0.70802-1.5875 1.5875v10.583c0 0.87946 0.70802 1.5875 1.5875 1.5875h8.4666c0.87946 0 1.5875-0.70802 1.5875-1.5875l-9.9e-5 -7.9374-4.2333-4.2333z"
                fill="#5494de"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.087"
                style="paint-order:stroke fill markers"
            />
            <rect
                transform="rotate(-90)"
                x="-16.404"
                y="7.1436"
                width="8.4665"
                height="8.4665"
                rx="4.2333"
                ry="4.2333"
                fill="#f9f9f9"
                stroke-width=".5926"
            />
            <path
                d="m14.023 5.2915-4.2333-4.2332v2.6458c0 0.87946 0.70801 1.5875 1.5875 1.5875z"
                fill="#ffffff"
                opacity=".5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".39687"
                style="paint-order:stroke fill markers"
            />
            <image
                x="8.4665"
                y="1.0583"
                width="5.5561"
                height="5.8207"
                image-rendering="optimizeQuality"
                preserveAspectRatio="none"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA GXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAMVJREFUOI2llOsOwyAIhY+2e//3 3VLdn5Idz8BbSYhWwidYIKGVRPuKTckdW+rYpqHJ2W+BvUgVuAxW6GOgB30MZKgCRt9dOchJdVui 9B+BvR/FGpXcNNQDbkV9BpHyZRVAGXCallaogb1nKeocXexBTSz9DOC619oBX7c20Ip/p0yrZ2d5 AfgAeGukBb9Uo7rtjcQTQNbJZOkepPYMwGQVaPocrZ1ltOU1lKjHLWKtVW/mDqF8zpBo8CxB1bY0 tWbbb6lNv5crG3xcbYlgAAAAAElFTkSuQmCC "
            />
            <image
                x="7.1436"
                y="7.9373"
                width="8.2019"
                height="8.2019"
                image-rendering="optimizeQuality"
                preserveAspectRatio="none"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAACXBIWXMAAA6tAAAOrQEO74BnAAAA GXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA3JJREFUSInFlz9rHFcUxc+982Z2 pdVfEtkhsghYaqJtXKdwVAXUmYAUUqR1lTT5Apk+hUEkhb5CFlKm1gcwxAQcsIQt4ziyhYUdydLu /HnvnhTaXaRYG62U3ejAgzdwOb95w5177xP0qeW1rcqoS2YJuxYRU4SNgpoIQYgUgB0a+cYrd5OZ +Z3GqoTzPOW8gDv3tqfUhXqE6Iap6bmGVEKsCEEeO/9ys/HtJ60Lw++u34/3/PQtpc5T7NyXPAkX AQEGI5uEPPz565vPALAv+MqPD8eM1dsQTPYLPRMekEeRHhL+j/qr+SdpKnYy9p3P+OX6o/eJ6meX AfdSoJv4dfzxbJryFO/Uw1ffv6yV3t0mUBkUuCM3EscPJp9OnAm/u34/blWzoYA7Ghkt3PLaVte/ C9/z07eoYWpY4I5cZT9K01S78Dv3tqeUOj9scEcb+FQBwAGAulCnSN+/04Akury2VYkQ3fifwQAJ HXXJbD+VaxhSwq5dBRgANCKGnuE94WZWuzK4Qt2Vwa8KfAwXKYZhLKoUZbuNlkCenwGHHQ6cbAHB t7dGisVUlzArjdWj692+rka+GThblKKgGahCc4lZkMRcMUYAmFlcIgA4r9yNGS0MCiwCwkAlTSIN hBlLWKJN02qTycg4j9qxmszM7wgkFwH/02KggkajQTUEMlgwb9TSoCUsCeVBzXbfegINQABtrEqA cBtguOwSFS8Qb6JeIykJKyGhEEiugjzQl7krPMazMFdZsPrvKwSkPdbk7pFQmwbkl1pBchPkEkJO IkNgSxg1xVkTwlYcV7PJLCqQ74fNFxtMvzseJrtt9PMfnnwU0S7V00UdzUiJQNCCUUsV5BC2Ilrz qBVa1RGf4RWKOhZ9Z5A82cPli7VnN43FhWt9iBwlAtVImAWDloG+jGPLfKhlTpL8MOyXYx8s+MYq DJDjbD/hwY9fz23/Nvvnh1KG5EInRw71CUsPxgqLNfIWB1/LkiK858q9v/Z96/Xz8Ms3CyZt8D9P DgBIU+qDyacTI6PFhWp+VtboCjKuGssDbxjPAvKJgIODgMXF8NMKTEROXRx6jk7La1sVV6lF/47c 6e6q09eJ50Bt2nP3redcZcE2X2xwCUuWpiAg/d1YOkrTVDvDXj/qVC40GqjXV46zWt6F9gU/Fcee Hj1ce0M7+huBjhOshhl95QAAAABJRU5ErkJggg== "
            />
            <circle
                cx="11.377"
                cy="12.171"
                r="3.4395"
                fill="#ffffff"
                opacity=".15"
                stroke-linecap="square"
                stroke-width=".65515"
                style="paint-order:stroke fill markers"
            />
            <path
                d="m10.847 10.848v4.233h1.059v-4.233zm1.059-1.0825c0.03271 0.73595-1.0883 0.73702-1.057 1e-3 0.02935-0.67467 1.0276-0.67467 1.057 0z"
                fill="#ffffff"
            />
        </svg>
    {/if}
</div>

<style>
    #icon-selector {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #icon-selector > svg {
        width: 100%;
        height: 100%;
    }
</style>
