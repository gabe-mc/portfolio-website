import LinkedinIdle from "../animations/linkedin_idle.webp";
import LinkedinWalkForwards from "../animations/linkedin_walk_forward.webp";
import LinkedinWalkRight from "../animations/linkedin_walk_right.webp";
import LinkedinWalkLeft from "../animations/linkedin_walk_left.webp";
import LinkedinWeights from "../animations/linkedin_weights.webp";
import LinkedinWave from "../animations/linkedin_wave.webp";
import LinkedinSoccer from "../animations/linkedin_soccer.webp";

import GithubIdle from "../animations/github_idle.webp";
import GithubWalkForwards from "../animations/github_walk_forward.webp";
import GithubWalkRight from "../animations/github_walk_right.webp";
import GithubWalkLeft from "../animations/github_walk_left.webp";
import GithubSword from "../animations/github_sword.webp";
import GithubBasketball from "../animations/github_basketball.webp";

import MailIdle from "../animations/mail_idle.webp";
import MailWalkForwards from "../animations/mail_walk_forward.webp";
import MailWalkRight from "../animations/mail_walk_right.webp";
import MailWalkLeft from "../animations/mail_walk_left.webp";
import MailJump from "../animations/mail_jump.webp";
import { StaticImageData } from "next/image";

type Variant = "idle" | "walk-forward" | "walk-right" | "walk-left" | "lift-weight" | "wave" | "soccer" | "sword" | "basketball" | "jump"

interface AnimationVariant {
  className: string;
  src: StaticImageData;
}

type IconName = "linkedin" | "github" | "mail";

export const animatedIconAssets: Record<IconName, Partial<Record<Variant, AnimationVariant>>> = {

  linkedin: {
    idle:         { className: "idle",         src: LinkedinIdle },
    "walk-forward": { className: "walk-forward", src: LinkedinWalkForwards },
    "walk-right":   { className: "walk-right",   src: LinkedinWalkRight },
    "walk-left":   { className: "walk-left",   src: LinkedinWalkLeft },
    "lift-weight": { className: "lift-weight", src: LinkedinWeights},
    "wave": { className: "wave", src: LinkedinWave},
    "soccer": { className: "soccer", src: LinkedinSoccer},
  },

  github: {
    idle:         { className: "idle",         src: GithubIdle },
    "walk-forward": { className: "walk-forward", src: GithubWalkForwards },
    "walk-right":   { className: "walk-right",   src: GithubWalkRight },
    "walk-left":   { className: "walk-left",   src: GithubWalkLeft },
    "sword":   { className: "walk-left",   src: GithubSword },
    "basketball":   { className: "walk-left",   src: GithubBasketball },
  },

    mail: {
    idle:         { className: "idle",         src: MailIdle },
    "walk-forward": { className: "walk-forward", src: MailWalkForwards },
    "walk-right":   { className: "walk-right",   src: MailWalkRight },
    "walk-left":   { className: "walk-left",   src: MailWalkLeft },
    "jump":   { className: "jump",   src: MailJump },
  },
};

export type { Variant, IconName };
