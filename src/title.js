import './App.css';

export default function HeadingSVG() {
    return (
        <svg class="heading" width="132" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 36" >
            <path d="M130.33 35.701H122.795C121.718 35.701 121.422 34.5052 122.176 33.4837C122.579 32.8609 123.306 31.7398 123.306 29.9709C123.306 27.6042 121.314 26.0346 117.063 26.0346C112.353 26.0346 110.039 27.5045 110.039 29.9211C110.039 31.6651 111.061 32.537 111.976 33.3841C113.349 34.6547 112.703 35.701 111.68 35.701H69.2418C67.8694 35.701 67.6541 34.4803 68.4345 33.4339C69.2418 32.2879 70.3721 31.5903 70.3721 29.8215C70.3721 27.4048 68.273 26.0346 64.1826 26.0346C59.7692 26.0346 57.2126 27.4547 57.2126 29.8713C57.2126 31.391 57.8316 32.8609 58.5851 33.5585C59.6077 34.6048 59.1502 35.701 58.3698 35.701H46.529C43.8648 35.701 43.1382 33.9073 43.1382 33.0851V27.3052C43.1382 23.4685 40.5279 20.3294 36.4374 20.3294H34.0692V24.3156C34.0692 27.928 34.8497 30.4194 35.4417 32.6616C35.8992 34.3806 34.7689 35.701 32.8852 35.701H22.6321C19.4566 35.701 18.73 33.3343 18.0841 33.3343C17.0615 33.3343 17.3575 36 11.2219 36C4.03664 35.9751 0 30.818 0 19.2581C0 6.55225 4.60177 0 13.0518 0C17.1961 0 18.9991 2.36678 20.0756 2.36678C21.2058 2.36678 21.152 0.099654 23.1972 0.099654C24.4889 0.099654 24.7311 1.6692 24.166 3.5128C23.4394 5.7301 22.8474 7.59862 22.6859 10.9121C22.5783 12.4817 22.2284 13.1045 21.5018 13.1045C18.8915 13.1045 19.349 5.70519 13.2671 5.70519C7.72344 5.70519 5.1669 11.5848 5.1669 19.1336C5.1669 26.0097 7.61579 30.3197 12.2445 30.3197C16.604 30.3197 18.434 27.8035 18.434 25.0131C18.434 22.6962 17.0077 21.5502 13.9668 20.8028C11.5179 20.1799 12.0292 17.1156 14.1282 17.1156H24.3275C25.7538 17.1156 26.4804 20.0554 24.2737 20.8526C22.7397 21.4754 22.0131 23.4187 22.0131 26.2588C22.0131 29.946 23.251 31.8893 25.3501 31.8893C27.2339 31.8893 28.2296 30.9426 28.9831 27.1557C30.0057 22.4221 29.6558 14.4498 29.602 8.89412C29.5482 6.32803 28.8216 3.91142 28.2834 3.16401C27.2069 1.54464 27.7721 0.174394 29.5213 0.174394H37.6753C45.0489 0.174394 49.4085 3.96125 49.4085 10.2145C49.4085 14.0512 46.9596 17.3149 42.9498 18.7848C46.9327 20.5785 48.332 23.2443 48.7895 26.8817C49.247 30.5689 49.9736 31.5156 50.8886 31.5156C51.6959 31.5156 52.261 30.3696 53.1491 26.6325C53.9295 23.4934 57.0512 11.1862 57.5087 8.6699C57.9661 6.15363 57.6163 3.88651 57.105 2.31696C56.7013 0.99654 57.0512 0.124567 58.2891 0.124567H69.5109C70.8296 0.124567 71.0987 1.22076 70.8296 2.26713C70.5605 3.26367 70.2644 4.63391 70.2644 6.8263C70.2644 10.3391 74.5164 24.9882 75.2699 27.5543C76.4001 31.117 77.0191 32.4374 78.0955 32.4374C79.5756 32.4374 79.7371 31.2166 82.2936 26.2339C83.8814 23.1446 88.5908 15.1972 89.9363 13.0547C91.5779 10.3889 92.6543 8.96886 92.6543 7.42422C92.6543 6.15363 91.7393 5.33149 89.4788 5.33149C86.5994 5.33149 85.1731 6.60208 84.5541 7.99723C83.989 9.21799 84.0966 10.3142 84.1505 12.9799C84.2043 14.7737 82.7242 16.3433 81.0826 16.3433C78.9836 16.3433 77.961 14.7737 77.961 13.4533C77.961 10.937 80.356 11.0367 80.356 8.79446C80.356 6.70173 79.7371 4.11073 78.3108 2.16747C77.6918 1.37024 78.2032 0.174394 80.1138 0.174394H99.7857C102.45 0.174394 102.907 2.31695 101.32 4.4346C97.875 9.0436 93.7846 16.1439 89.129 24.0664C87.8911 26.1592 87.4336 27.2554 87.4336 28.7003C87.4336 30.0706 88.6177 31.391 91.9277 31.391C93.8115 31.391 95.2647 30.1702 95.9644 29.1239C96.9332 27.8035 96.8793 25.6111 96.8793 23.3439C96.8793 20.2048 98.4133 18.7349 100.458 18.7349C101.939 18.7349 103.365 19.582 103.365 21.6249C103.365 22.7211 103.15 23.3439 101.939 24.8138C101.077 25.8104 100.755 26.9066 100.862 28.4263C101.131 31.3163 101.723 32.4125 102.719 32.4125C104.253 32.4125 104.468 31.2166 105.222 28.2768C106.406 23.7176 109.258 12.7308 110.039 9.74118C110.819 6.75156 111.115 4.11073 110.146 2.19239C109.581 1.14602 110.146 0.149481 111.331 0.149481H123.064C124.14 0.149481 124.651 1.09619 124.194 2.36678C123.575 4.08581 123.575 6.35294 124.086 9.56678C124.598 12.8305 126.858 21.7495 127.935 26.0595C128.957 30.0955 129.926 31.4657 131.379 32.9855C132.59 34.3308 131.917 35.701 130.33 35.701ZM37.0294 16.7419C41.389 16.7419 43.7841 14.2754 43.7841 10.5882C43.7841 7.39931 41.8465 5.03253 38.5634 5.03253C35.6032 5.03253 34.0961 6.6519 34.0961 9.81592V16.7419H37.0294ZM67.8963 21.9488C65.1244 8.09689 65.0706 6.30311 63.752 6.30311C62.4603 6.30311 62.4334 8.02214 59.5001 21.9488H67.8963ZM121.126 21.9488C118.3 8.04706 118.247 6.25329 116.928 6.25329C115.636 6.25329 115.636 7.97232 112.73 21.9488H121.126Z" />
        </svg>
    );
};