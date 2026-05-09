type SibebarBackgroundBlur = {
  onClick: () => void;
};

export function SibebarBackgroundBlur({ onClick }: SibebarBackgroundBlur) {
  return (
    <div
      onClick={onClick}
      className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
    />
  );
}
