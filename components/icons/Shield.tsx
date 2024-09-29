import ISVGProps from "@/types/ISVGProps";

export default function Shield(props: ISVGProps) {
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
            transform="translate(-1583, -9)"
            fill={props.color}
            fillRule="nonzero"
          >
            <g id="links-w-icons" transform="translate(1080, 8)">
              <g id="mykreative" transform="translate(503, 0)">
                <g id="Shield" transform="translate(4.75, 5.0846)">
                  <g transform="translate(-0.75, -0.0846)" id="Path">
                    <path d="M9.1607,0.40707 C8.4466,-0.0229 7.5534,-0.0229 6.8393,0.40707 L6.323,0.71796 C5.07029,1.4723 3.66391,1.93519 2.20803,2.07235 L1.88275,2.103 C1.24066,2.16349 0.75,2.70255 0.75,3.34749 L0.75,4.99137 C0.75,7.77 1.87808,10.4296 3.87584,12.3608 L7.1312,15.5078 C7.6157,15.9762 8.3843,15.9762 8.8688,15.5078 L12.1242,12.3608 C14.1219,10.4296 15.25,7.77 15.25,4.99137 L15.25,3.34749 C15.25,2.70255 14.7593,2.16349 14.1172,2.103 L13.792,2.07235 C12.3361,1.93519 10.9297,1.4723 9.677,0.71796 L9.1607,0.40707 Z"></path>
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
