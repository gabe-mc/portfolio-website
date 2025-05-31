import LinkedinIdle from "../animations/linkedin_icon_idle.webp";
import LinkedinWalkForwards from "../animations/linkedin_icon_walk_forward.webp";
import LinkedinWalkRight from "../animations/linkedin_icon_walk_right.webp";

import GithubIdle from "../animations/github_idle.webp";
import GithubWalkForwards from "../animations/github_walk_forward.webp";
import GithubWalkRight from "../animations/github_walk_right.webp";
import GithubWalkLeft from "../animations/github_walk_left.webp";

type Variant = "idle" | "walk-forward" | "walk-right" | "walk-left";

interface AnimationVariant {
  className: string;
  src: any;
}

type IconName = "linkedin" | "github";

export const animatedIconAssets: Record<IconName, Partial<Record<Variant, AnimationVariant>>> = {

  linkedin: {
    idle:         { className: "idle",         src: LinkedinIdle },
    "walk-forward": { className: "walk-forward", src: LinkedinWalkForwards },
    "walk-right":   { className: "walk-right",   src: LinkedinWalkRight },
  },

  github: {
    idle:         { className: "idle",         src: GithubIdle },
    "walk-forward": { className: "walk-forward", src: GithubWalkForwards },
    "walk-right":   { className: "walk-right",   src: GithubWalkRight },
    "walk-left":   { className: "walk-left",   src: GithubWalkLeft },
  },
};

export type { Variant, IconName };
