export const NeotecsLogo = (props) => {
  const { children, ...attrs } = props;
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 370 97"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class="neotecs-logo"
      {...attrs}
    >
      <path
        d="M0.3305 96.64C2.71983 84.608 5.02383 72.8747 7.2425 61.44C8.09583 56.6613 8.99183 51.6693 9.9305 46.464C10.9545 41.1733 11.8932 36.0107 12.7465 30.976C13.5998 25.856 14.3678 20.9493 15.0505 16.256C15.8185 11.4773 16.4158 7.12533 16.8425 3.2C19.4878 3.02933 22.0478 2.85866 24.5225 2.688C26.7412 2.51733 29.0025 2.38933 31.3065 2.30399C33.6105 2.13333 35.6585 1.96266 37.4505 1.79199C38.5598 8.36266 39.5412 14.6347 40.3945 20.608C40.8212 23.168 41.2478 25.856 41.6745 28.672C42.1865 31.4027 42.6558 34.048 43.0825 36.608C43.5092 39.168 43.9358 41.6427 44.3625 44.032C44.7892 46.336 45.2158 48.384 45.6425 50.176C45.9838 48.384 46.3678 46.336 46.7945 44.032C47.2212 41.6427 47.6905 39.168 48.2025 36.608C48.7145 33.9627 49.2265 31.2747 49.7385 28.544C50.3358 25.8133 50.8905 23.168 51.4025 20.608C52.6825 14.6347 54.0052 8.40533 55.3705 1.92L70.9865 -7.62939e-06C68.0852 12.8 65.5252 24.9173 63.3065 36.352C62.2825 41.3013 61.2585 46.2933 60.2345 51.328C59.2958 56.3627 58.3998 61.2267 57.5465 65.92C56.6932 70.6133 55.9678 74.9653 55.3705 78.976C54.7732 82.9013 54.3038 86.2293 53.9625 88.96C53.7065 88.96 52.6825 89.1733 50.8905 89.6C49.1838 89.9413 47.1785 90.368 44.8745 90.88C42.6558 91.392 40.3945 91.9467 38.0905 92.544C35.8718 93.056 34.2078 93.4827 33.0985 93.824C32.5012 86.912 31.8612 80.3413 31.1785 74.112C30.9225 71.4667 30.6238 68.736 30.2825 65.92C29.9412 63.104 29.5998 60.416 29.2585 57.856C29.0025 55.296 28.7038 52.9067 28.3625 50.688C28.1065 48.384 27.8505 46.464 27.5945 44.928C27.3385 46.464 26.9972 48.3413 26.5705 50.56C26.1438 52.7787 25.7172 55.168 25.2905 57.728C24.8638 60.2027 24.4372 62.8053 24.0105 65.536C23.5838 68.1813 23.1145 70.784 22.6025 73.344C21.4932 79.4027 20.2985 85.7173 19.0185 92.288L0.3305 96.64ZM58.5865 96.128L75.3545 5.12L115.803 1.66399C115.205 3.54133 114.693 5.46133 114.267 7.424C113.84 9.04533 113.413 10.752 112.987 12.544C112.645 14.2507 112.347 15.7867 112.091 17.152C111.237 17.2373 110 17.3227 108.379 17.408C106.843 17.408 105.179 17.4507 103.387 17.536C101.595 17.536 99.7598 17.536 97.8825 17.536C96.0905 17.536 94.5118 17.536 93.1465 17.536L88.6665 40.448C91.3118 40.2773 93.7865 40.1493 96.0905 40.064C97.9678 39.9787 99.8878 39.936 101.851 39.936C103.813 39.936 105.264 39.8933 106.203 39.808C105.861 42.1973 105.52 44.544 105.179 46.848C104.923 49.152 104.581 51.4987 104.155 53.888C103.301 53.9733 101.893 54.0587 99.9305 54.144C98.0532 54.144 96.1332 54.1867 94.1705 54.272C91.9518 54.3573 89.5198 54.4427 86.8745 54.528L82.5225 78.08L101.211 75.136L99.9305 89.728L58.5865 96.128ZM172.118 26.752C172.118 33.7493 171.35 40.3627 169.814 46.592C168.363 52.736 166.4 58.4107 163.926 63.616C161.451 68.736 158.55 73.344 155.222 77.44C151.979 81.4507 148.566 84.9067 144.982 87.808C141.398 90.624 137.771 92.8 134.102 94.336C130.432 95.7867 126.934 96.512 123.606 96.512C120.79 96.512 118.23 96 115.926 94.976C113.622 93.8667 111.616 92.288 109.91 90.24C108.203 88.1067 106.838 85.4187 105.814 82.176C104.875 78.848 104.406 74.88 104.406 70.272C104.406 65.4933 105.003 60.4587 106.198 55.168C107.392 49.8773 109.014 44.6293 111.062 39.424C113.11 34.2187 115.627 29.2693 118.614 24.576C121.6 19.8827 124.886 15.744 128.47 12.16C132.054 8.49066 135.894 5.58933 139.99 3.45599C144.086 1.32266 148.352 0.255997 152.79 0.255997C156.63 0.255997 159.787 1.06666 162.262 2.688C164.822 4.224 166.784 6.272 168.15 8.83199C169.6 11.3067 170.624 14.1227 171.222 17.28C171.819 20.4373 172.118 23.5947 172.118 26.752ZM123.478 66.944C123.478 67.8827 123.648 68.864 123.99 69.888C124.331 70.912 124.8 71.808 125.398 72.576C125.995 73.344 126.72 74.0267 127.574 74.624C128.512 75.136 129.494 75.392 130.518 75.392C134.358 75.392 137.771 74.0693 140.758 71.424C143.744 68.7787 146.219 65.536 148.182 61.696C150.144 57.856 151.638 53.76 152.662 49.408C153.771 45.056 154.326 41.088 154.326 37.504C154.326 36.48 154.24 35.3707 154.07 34.176C153.984 32.9813 153.728 31.872 153.302 30.848C152.96 29.824 152.363 28.9707 151.51 28.288C150.742 27.52 149.675 27.136 148.31 27.136C145.579 27.136 143.062 27.8187 140.758 29.184C138.454 30.5493 136.363 32.384 134.486 34.688C132.694 36.9067 131.115 39.4667 129.75 42.368C128.384 45.184 127.19 48.0853 126.166 51.072C125.227 53.9733 124.544 56.832 124.118 59.648C123.691 62.464 123.478 64.896 123.478 66.944ZM172.708 96.128C174.67 86.7413 176.548 77.4827 178.34 68.352C179.108 64.512 179.876 60.5013 180.644 56.32C181.412 52.1387 182.137 48.0427 182.82 44.032C183.588 39.936 184.228 36.0107 184.74 32.256C185.337 28.416 185.849 24.9173 186.276 21.76C184.313 21.504 182.308 21.4187 180.26 21.504C178.297 21.5893 176.334 21.3333 174.372 20.736C174.457 19.3707 174.5 17.792 174.5 16C174.5 14.208 174.542 12.416 174.628 10.624C174.713 8.66133 174.798 6.57066 174.884 4.352C177.102 4.52266 179.321 4.65066 181.54 4.73599C183.758 4.82133 185.977 4.864 188.196 4.864C192.548 4.864 196.729 4.77866 200.74 4.60799C204.836 4.352 208.59 4.096 212.004 3.84C215.502 3.49866 218.916 3.11466 222.244 2.688L220.836 9.6C220.409 11.5627 219.982 13.568 219.556 15.616C219.214 17.664 218.873 19.4133 218.532 20.864C216.654 21.376 214.734 21.76 212.772 22.016C210.894 22.1867 209.017 22.4427 207.14 22.784C206.542 25.6853 205.902 28.928 205.22 32.512C204.537 36.0107 203.854 39.68 203.172 43.52C202.574 47.2747 201.977 51.1147 201.38 55.04C200.782 58.9653 200.185 62.72 199.588 66.304C198.222 74.752 196.942 83.4987 195.748 92.544L172.708 96.128ZM208.587 96.128L225.355 5.12L265.803 1.66399C265.205 3.54133 264.693 5.46133 264.267 7.424C263.84 9.04533 263.413 10.752 262.987 12.544C262.645 14.2507 262.347 15.7867 262.091 17.152C261.237 17.2373 260 17.3227 258.379 17.408C256.843 17.408 255.179 17.4507 253.387 17.536C251.595 17.536 249.76 17.536 247.883 17.536C246.091 17.536 244.512 17.536 243.147 17.536L238.667 40.448C241.312 40.2773 243.787 40.1493 246.091 40.064C247.968 39.9787 249.888 39.936 251.851 39.936C253.813 39.936 255.264 39.8933 256.203 39.808C255.861 42.1973 255.52 44.544 255.179 46.848C254.923 49.152 254.581 51.4987 254.155 53.888C253.301 53.9733 251.893 54.0587 249.931 54.144C248.053 54.144 246.133 54.1867 244.171 54.272C241.952 54.3573 239.52 54.4427 236.875 54.528L232.523 78.08L251.211 75.136L249.931 89.728L208.587 96.128ZM305.094 68.48C303.046 73.1733 300.742 77.2693 298.182 80.768C295.707 84.1813 293.062 87.0827 290.246 89.472C287.515 91.776 284.742 93.4827 281.926 94.592C279.11 95.7013 276.379 96.256 273.734 96.256C271.088 96.256 268.656 95.6587 266.438 94.464C264.304 93.2693 262.427 91.4773 260.806 89.088C259.184 86.6987 257.862 83.7547 256.838 80.256C255.899 76.7573 255.43 72.6613 255.43 67.968C255.43 59.9467 256.539 52.0533 258.758 44.288C260.976 36.4373 264.091 29.3973 268.102 23.168C272.112 16.9387 276.848 11.9467 282.31 8.19199C287.856 4.352 293.958 2.432 300.614 2.432C302.662 2.432 304.624 2.85867 306.502 3.712C308.379 4.56533 310 5.76 311.366 7.296C312.731 8.832 313.798 10.7093 314.566 12.928C315.419 15.1467 315.846 17.6213 315.846 20.352C315.846 20.864 315.846 21.4187 315.846 22.016C315.846 22.528 315.803 23.0827 315.718 23.68L298.95 28.16C297.926 26.0267 296.731 24.96 295.366 24.96C294 24.96 292.55 25.7707 291.014 27.392C289.563 28.928 288.112 30.976 286.662 33.536C285.211 36.0107 283.803 38.8267 282.438 41.984C281.072 45.056 279.878 48.1707 278.854 51.328C277.83 54.4853 276.976 57.5147 276.294 60.416C275.696 63.232 275.398 65.536 275.398 67.328C275.398 70.0587 275.739 71.9787 276.422 73.088C277.19 74.1973 278.171 74.752 279.366 74.752C280.304 74.752 281.371 74.4107 282.566 73.728C283.76 72.96 284.87 72.0213 285.894 70.912C286.918 69.7173 287.856 68.3947 288.71 66.944C289.563 65.4933 290.16 64.0427 290.502 62.592L305.094 68.48ZM360.142 64.384C360.142 69.1627 359.203 73.5147 357.326 77.44C355.534 81.28 353.059 84.608 349.902 87.424C346.83 90.24 343.16 92.416 338.894 93.952C334.712 95.488 330.19 96.256 325.326 96.256C321.912 96.256 318.499 95.36 315.086 93.568C311.672 91.6907 308.387 88.7467 305.23 84.736L314.702 66.176C315.299 67.2853 316.195 68.4373 317.39 69.632C318.584 70.7413 319.907 71.7227 321.358 72.576C322.894 73.4293 324.387 74.1547 325.838 74.752C327.374 75.264 328.739 75.52 329.934 75.52C330.958 75.52 332.024 75.3493 333.134 75.008C334.243 74.6667 335.267 74.1547 336.206 73.472C337.144 72.7893 337.87 72.0213 338.382 71.168C338.979 70.2293 339.278 69.1627 339.278 67.968C339.278 65.92 338.595 64.0427 337.229 62.336C335.95 60.544 334.328 58.88 332.366 57.344C330.403 55.7227 328.27 54.1013 325.966 52.48C323.662 50.8587 321.528 49.152 319.566 47.36C317.688 45.568 316.067 43.5627 314.702 41.344C313.336 39.1253 312.654 36.6507 312.654 33.92C312.654 29.4827 313.976 25.344 316.622 21.504C319.267 17.664 322.552 14.3787 326.478 11.648C330.488 8.832 334.84 6.61333 339.534 4.992C344.227 3.37066 348.664 2.56 352.846 2.56C355.15 2.56 357.326 2.85866 359.374 3.45599C361.422 3.968 363.171 4.864 364.622 6.144C366.158 7.33866 367.352 8.87466 368.206 10.752C369.144 12.6293 369.614 14.976 369.614 17.792C369.614 18.9867 369.486 20.1813 369.229 21.376C369.059 22.5707 368.888 23.8507 368.718 25.216L350.158 30.592C350.328 29.9093 350.456 29.2267 350.542 28.544C350.712 27.8613 350.798 27.1787 350.798 26.496C350.798 23.936 350.328 22.1013 349.39 20.992C348.536 19.7973 347.384 19.2 345.934 19.2C345.251 19.2 344.398 19.456 343.374 19.968C342.435 20.48 341.454 21.1627 340.43 22.016C339.491 22.784 338.68 23.7227 337.998 24.832C337.315 25.9413 336.974 27.136 336.974 28.416C336.974 30.464 337.528 32.1707 338.638 33.536C339.832 34.9013 341.283 36.1813 342.99 37.376C344.696 38.5707 346.531 39.808 348.494 41.088C350.542 42.2827 352.419 43.8613 354.126 45.824C355.832 47.7867 357.24 50.2613 358.35 53.248C359.544 56.1493 360.142 59.8613 360.142 64.384Z"
        fill="currentColor"
      />
    </svg>
  );
};
