interface LogoProps extends React.SVGAttributes<SVGElement> {}

function LogoFull(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 78 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M60.6791 17.0201V6.16007H62.8791V10.8201H62.6791C62.6791 9.72673 62.8191 8.8134 63.0991 8.08007C63.3791 7.3334 63.7924 6.7734 64.3391 6.40007C64.8991 6.0134 65.5924 5.82007 66.4191 5.82007H66.5391C67.3791 5.82007 68.0724 6.0134 68.6191 6.40007C69.1791 6.7734 69.5924 7.3334 69.8591 8.08007C70.1391 8.8134 70.2791 9.72673 70.2791 10.8201H69.5791C69.5791 9.72673 69.7191 8.8134 69.9991 8.08007C70.2924 7.3334 70.7124 6.7734 71.2591 6.40007C71.8191 6.0134 72.5124 5.82007 73.3391 5.82007H73.4591C74.2991 5.82007 74.9991 6.0134 75.5591 6.40007C76.1191 6.7734 76.5391 7.3334 76.8191 8.08007C77.1124 8.8134 77.2591 9.72673 77.2591 10.8201V17.0201H74.4791V10.5601C74.4791 9.88007 74.3057 9.34007 73.9591 8.94007C73.6124 8.52673 73.1191 8.32007 72.4791 8.32007C71.8391 8.32007 71.3257 8.5334 70.9391 8.96007C70.5524 9.3734 70.3591 9.9334 70.3591 10.6401V17.0201H67.5791V10.5601C67.5791 9.88007 67.4057 9.34007 67.0591 8.94007C66.7124 8.52673 66.2191 8.32007 65.5791 8.32007C64.9391 8.32007 64.4257 8.5334 64.0391 8.96007C63.6524 9.3734 63.4591 9.9334 63.4591 10.6401V17.0201H60.6791Z" />
      <path d="M52.6056 17.36C51.3523 17.36 50.379 16.9467 49.6856 16.12C49.0056 15.2933 48.6656 14.0667 48.6656 12.44V6.14001H51.4456V12.68C51.4456 13.3467 51.6323 13.88 52.0056 14.28C52.379 14.6667 52.8857 14.86 53.5257 14.86C54.1657 14.86 54.6857 14.6533 55.0857 14.24C55.499 13.8267 55.7057 13.2667 55.7057 12.56V6.14001H58.4856V17.02H56.2856V12.4H56.5056C56.5056 13.4933 56.3657 14.4067 56.0857 15.14C55.8057 15.8733 55.3856 16.4267 54.8256 16.8C54.2656 17.1733 53.5657 17.36 52.7257 17.36H52.6056Z" />
      <path d="M46.0125 17.16C45.0125 17.16 44.1858 17.0333 43.5325 16.78C42.8925 16.5133 42.4125 16.0733 42.0925 15.46C41.7725 14.8333 41.6125 13.9933 41.6125 12.94L41.6325 3.09998H44.2325L44.2125 13.12C44.2125 13.6533 44.3525 14.0666 44.6325 14.36C44.9258 14.64 45.3391 14.78 45.8725 14.78H47.5725V17.16H46.0125ZM39.8925 8.19998V6.15998H47.5725V8.19998H39.8925Z" />
      <path d="M33.9382 17.4C32.9782 17.4 32.1315 17.2467 31.3982 16.94C30.6648 16.6334 30.0448 16.22 29.5382 15.7C29.0315 15.1667 28.6448 14.5667 28.3782 13.9C28.1248 13.2334 27.9982 12.54 27.9982 11.82V11.4C27.9982 10.6534 28.1315 9.9467 28.3982 9.28003C28.6782 8.60003 29.0715 8.00003 29.5782 7.48003C30.0982 6.9467 30.7248 6.53336 31.4582 6.24003C32.1915 5.93336 33.0182 5.78003 33.9382 5.78003C34.8582 5.78003 35.6848 5.93336 36.4182 6.24003C37.1515 6.53336 37.7715 6.9467 38.2782 7.48003C38.7982 8.00003 39.1915 8.60003 39.4582 9.28003C39.7248 9.9467 39.8582 10.6534 39.8582 11.4V11.82C39.8582 12.54 39.7248 13.2334 39.4582 13.9C39.2048 14.5667 38.8248 15.1667 38.3182 15.7C37.8115 16.22 37.1915 16.6334 36.4582 16.94C35.7248 17.2467 34.8848 17.4 33.9382 17.4ZM33.9382 15.02C34.6182 15.02 35.1915 14.8734 35.6582 14.58C36.1248 14.2734 36.4782 13.8667 36.7182 13.36C36.9582 12.84 37.0782 12.2534 37.0782 11.6C37.0782 10.9334 36.9515 10.3467 36.6982 9.84003C36.4582 9.32003 36.0982 8.91336 35.6182 8.62003C35.1515 8.31336 34.5915 8.16003 33.9382 8.16003C33.2848 8.16003 32.7182 8.31336 32.2382 8.62003C31.7715 8.91336 31.4115 9.32003 31.1582 9.84003C30.9048 10.3467 30.7782 10.9334 30.7782 11.6C30.7782 12.2534 30.8982 12.84 31.1382 13.36C31.3915 13.8667 31.7515 14.2734 32.2182 14.58C32.6848 14.8734 33.2582 15.02 33.9382 15.02Z" />
      <path d="M20.6447 17.36C19.3914 17.36 18.418 16.9467 17.7247 16.12C17.0447 15.2933 16.7047 14.0667 16.7047 12.44V6.14001H19.4847V12.68C19.4847 13.3467 19.6714 13.88 20.0447 14.28C20.418 14.6667 20.9247 14.86 21.5647 14.86C22.2047 14.86 22.7247 14.6533 23.1247 14.24C23.538 13.8267 23.7447 13.2667 23.7447 12.56V6.14001H26.5247V17.02H24.3247V12.4H24.5447C24.5447 13.4933 24.4047 14.4067 24.1247 15.14C23.8447 15.8733 23.4247 16.4267 22.8647 16.8C22.3047 17.1733 21.6047 17.36 20.7647 17.36H20.6447Z" />
      <path d="M10.52 21.32C9.68 21.32 8.94667 21.2133 8.32 21C7.70667 20.8 7.22667 20.4267 6.88 19.88C6.53333 19.3467 6.36 18.5867 6.36 17.6V15.52H9V17.78C9 18.1933 9.11333 18.5067 9.34 18.72C9.58 18.9467 9.9 19.06 10.3 19.06H12.58V21.32H10.52ZM7.72 17.4C6.4 17.4 5.25333 17.1667 4.28 16.7C3.32 16.2333 2.52 15.6267 1.88 14.88C1.25333 14.12 0.78 13.3067 0.46 12.44C0.153333 11.56 0 10.7133 0 9.9V9.46C0 8.56667 0.16 7.68 0.48 6.8C0.8 5.90667 1.28 5.1 1.92 4.38C2.57333 3.66 3.38 3.08667 4.34 2.66C5.3 2.22 6.42667 2 7.72 2C9 2 10.12 2.22 11.08 2.66C12.04 3.08667 12.84 3.66 13.48 4.38C14.1333 5.1 14.62 5.90667 14.94 6.8C15.26 7.68 15.42 8.56667 15.42 9.46V9.9C15.42 10.7133 15.26 11.56 14.94 12.44C14.6333 13.3067 14.16 14.12 13.52 14.88C12.8933 15.6267 12.0933 16.2333 11.12 16.7C10.16 17.1667 9.02667 17.4 7.72 17.4ZM7.72 14.76C8.46667 14.76 9.13333 14.6267 9.72 14.36C10.32 14.0933 10.8267 13.7267 11.24 13.26C11.6667 12.78 11.9867 12.24 12.2 11.64C12.4267 11.0267 12.54 10.38 12.54 9.7C12.54 8.96667 12.4267 8.29333 12.2 7.68C11.9867 7.06667 11.6667 6.53333 11.24 6.08C10.8267 5.62667 10.32 5.27333 9.72 5.02C9.12 4.76667 8.45333 4.64 7.72 4.64C6.97333 4.64 6.3 4.76667 5.7 5.02C5.1 5.27333 4.58667 5.62667 4.16 6.08C3.74667 6.53333 3.42667 7.06667 3.2 7.68C2.98667 8.29333 2.88 8.96667 2.88 9.7C2.88 10.38 2.98667 11.0267 3.2 11.64C3.42667 12.24 3.74667 12.78 4.16 13.26C4.58667 13.7267 5.1 14.0933 5.7 14.36C6.3 14.6267 6.97333 14.76 7.72 14.76Z" />
    </svg>
  );
}

function LogoMini(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 16 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.52 21.32C9.68 21.32 8.94667 21.2133 8.32 21C7.70667 20.8 7.22667 20.4267 6.88 19.88C6.53333 19.3467 6.36 18.5867 6.36 17.6V15.52H9V17.78C9 18.1933 9.11333 18.5067 9.34 18.72C9.58 18.9467 9.9 19.06 10.3 19.06H12.58V21.32H10.52ZM7.72 17.4C6.4 17.4 5.25333 17.1667 4.28 16.7C3.32 16.2333 2.52 15.6267 1.88 14.88C1.25333 14.12 0.78 13.3067 0.46 12.44C0.153333 11.56 0 10.7133 0 9.9V9.46C0 8.56667 0.16 7.68 0.48 6.8C0.8 5.90667 1.28 5.1 1.92 4.38C2.57333 3.66 3.38 3.08667 4.34 2.66C5.3 2.22 6.42667 2 7.72 2C9 2 10.12 2.22 11.08 2.66C12.04 3.08667 12.84 3.66 13.48 4.38C14.1333 5.1 14.62 5.90667 14.94 6.8C15.26 7.68 15.42 8.56667 15.42 9.46V9.9C15.42 10.7133 15.26 11.56 14.94 12.44C14.6333 13.3067 14.16 14.12 13.52 14.88C12.8933 15.6267 12.0933 16.2333 11.12 16.7C10.16 17.1667 9.02667 17.4 7.72 17.4ZM7.72 14.76C8.46667 14.76 9.13333 14.6267 9.72 14.36C10.32 14.0933 10.8267 13.7267 11.24 13.26C11.6667 12.78 11.9867 12.24 12.2 11.64C12.4267 11.0267 12.54 10.38 12.54 9.7C12.54 8.96667 12.4267 8.29333 12.2 7.68C11.9867 7.06667 11.6667 6.53333 11.24 6.08C10.8267 5.62667 10.32 5.27333 9.72 5.02C9.12 4.76667 8.45333 4.64 7.72 4.64C6.97333 4.64 6.3 4.76667 5.7 5.02C5.1 5.27333 4.58667 5.62667 4.16 6.08C3.74667 6.53333 3.42667 7.06667 3.2 7.68C2.98667 8.29333 2.88 8.96667 2.88 9.7C2.88 10.38 2.98667 11.0267 3.2 11.64C3.42667 12.24 3.74667 12.78 4.16 13.26C4.58667 13.7267 5.1 14.0933 5.7 14.36C6.3 14.6267 6.97333 14.76 7.72 14.76Z" />
    </svg>
  );
}

const Logo = Object.assign(LogoFull, { Mini: LogoMini });

export default Logo;