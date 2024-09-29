import ISVGProps from "@/types/ISVGProps";

export default function Pin(props: ISVGProps) {
  return (
    <span>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="navbar-w-icons"
            transform="translate(-1383, -9)"
            fill={props.color}
            fillRule="nonzero"
          >
            <g id="links-w-icons" transform="translate(1080, 8)">
              <g id="legal" transform="translate(303, 0)">
                <g id="Pin" transform="translate(3.2499, 4.7121)">
                  <g transform="translate(-0.2499, -0.7121)" id="Path">
                    <path d="M13.4321,1.07853 C12.8067,0.45322 11.7476,0.65719 11.3992,1.47002 L9.6399,5.57526 C8.1944,5.14698 6.56519,5.50302 5.42358,6.64464 L4.06704,8.0012 C3.77414,8.2941 3.77414,8.7689 4.06704,9.0618 L6.20881,11.2036 L0.46961,16.9428 C0.17672,17.2357 0.17672,17.7106 0.46961,18.0035 C0.7625,18.2964 1.23738,18.2964 1.53027,18.0035 L7.2695,12.2643 L9.4113,14.4061 C9.7042,14.699 10.1791,14.699 10.4719,14.4061 L11.8285,13.0496 C12.9701,11.9079 13.3262,10.2787 12.8979,8.8333 L17.0031,7.0739 C17.8159,6.72551 18.0199,5.66637 17.3946,5.04105 L13.4321,1.07853 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
}
