import { animatedIconAssets, Variant, IconName } from "./iconassets";

interface AnimatedIconProps {
  icon: IconName;
  variant?: Variant;
  style?: React.CSSProperties;
  href: string;
}

export default function AnimatedIcon({ icon, href, variant = "idle", style }: AnimatedIconProps) {
  const anim = animatedIconAssets[icon][variant];
  if (!anim) return null;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <img
        className={`size-20 ${anim.className}`}
        src={anim.src.src}
        alt={icon}
        width={314}
        height={314}
        draggable={false}
        style={style}
      />
    </a>
  );
}
