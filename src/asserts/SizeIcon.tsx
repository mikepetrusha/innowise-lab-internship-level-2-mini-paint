interface IProps {
  width: string;
  height: string;
}

export default function SizeIcon({ width, height }: IProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M297.6 48l64.9 64.9-249.6 249.6L48 297.6V464h166.4l-64.9-64.9 249.6-249.6 64.9 64.9V48z" />
    </svg>
  );
}
