import Image from "next/image";
import LinkedinIdle from "../animations/linkedin_icon_idle.webp";
import LinkedinWalkForwards from "../animations/linkedin_icon_walk_forward.webp";
import LinkedinWalkRight from "../animations/linkedin_icon_walk_right.webp";

type Variant = "idle" | "walk-forward" | "walk-right";

interface AnimationVariant {
  className: string;
  src: any;
}

const animationVariants: Record<Variant, AnimationVariant> = {
  "idle": {
    className: "idle",
    src: LinkedinIdle,
  },

  "walk-forward": {
    className: "walk-forward",
    src: LinkedinWalkForwards,
  },

  "walk-right": {
    className: "walk-right",
    src: LinkedinWalkRight,
  },
};

interface AnimatedIconProps {
  variant?: Variant;
  style?: React.CSSProperties;
}

export default function AnimatedIcon({ variant = "idle", style }: AnimatedIconProps) {

  const anim = animationVariants[variant];

  return (
    <a href="https://www.linkedin.com/in/gabrielmcfadyen">
      <Image
        className={`size-20 cursor-pointer ${anim.className}`}
        src={anim.src}
        alt="linkedin"
        width={314}
        height={314}
        draggable={false}
        style={style}
      />
    </a>
  );
}
