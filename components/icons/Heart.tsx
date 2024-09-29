import ISVGProps from "@/types/ISVGProps";

export default function Heart(props: ISVGProps) {
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
            transform="translate(-1175, -9)"
            fill={props.color}
            fillRule="nonzero"
          >
            <g id="links-w-icons" transform="translate(1080, 8)">
              <g id="support" transform="translate(95, 0)">
                <g id="Heart" transform="translate(3.25, 6.25)">
                  <g transform="translate(-0.25, -0.25)" id="Path">
                    <path d="M5.4,0.25 C2.61914,0.25 0.25,2.3293 0.25,5.0298 C0.25,6.8927 1.12235,8.4612 2.27849,9.7604 C3.43066,11.0552 4.91714,12.142 6.26097,13.0516 L8.5796,14.6211 C8.8335,14.793 9.1665,14.793 9.4204,14.6211 L11.739,13.0516 C13.0829,12.142 14.5693,11.0552 15.7215,9.7604 C16.8777,8.4612 17.75,6.8927 17.75,5.0298 C17.75,2.3293 15.3809,0.25 12.6,0.25 C11.1665,0.25 9.9052,0.92214 9,1.79183 C8.0948,0.92214 6.83347,0.25 5.4,0.25 Z"></path>
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
