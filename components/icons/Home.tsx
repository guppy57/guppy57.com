import ISVGProps from "@/types/ISVGProps";

export default function Home(props: ISVGProps) {
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
          id="Solid-/-General-/Home"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Home"
            transform="translate(4, 3)"
            fill={props.color}
            fillRule="nonzero"
          >
            <path
              d="M9.796,1.13609 C8.8136,0.12147 7.1863,0.12147 6.2039,1.13608 L1.40546,6.09182 C1.12987,6.37643 0.94469,6.73624 0.87323,7.1259 C0.29047,10.3039 0.24745,13.5573 0.74599,16.7496 L0.92249,17.8798 C0.97824,18.2368 1.2857,18.5 1.64701,18.5 L4.99997,18.5 C5.27611,18.5 5.49997,18.2761 5.49997,18 L5.49997,11 L10.5,11 L10.5,18 C10.5,18.2761 10.7238,18.5 11,18.5 L14.3529,18.5 C14.7142,18.5 15.0217,18.2368 15.0774,17.8798 L15.2539,16.7496 C15.7524,13.5573 15.7094,10.3039 15.1267,7.1259 C15.0552,6.73624 14.87,6.37643 14.5944,6.09182 L9.796,1.13609 Z"
              id="Path"
            ></path>
          </g>
        </g>
      </svg>
    </span>
  );
}
