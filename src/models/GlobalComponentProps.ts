type ButtonProps = {
  text: string;
  to: string;
  withIcon?: boolean;
};

type TextProps = {
  text: string;
};

type CardLocationProps = {
  title: string;
  subtitle: string;
  image: string;
};

type CardBenefitProps = {
  title: string;
  image: string;
};

type CardFavoriteProps = {
  title: string;
  description: string;
  image: string;
};

type HeaderProps = {
  title: string;
  description: string;
  img: string[];
  currentImg: string;
};

type ListFooterProps = {
  title: string;
  description: string;
};

type CardMenuProps = {
  name: string;
  image: string;
  tag: string;
  ingredients: string;
  nutritions: {
    calories: string,
    protein: string,
    total_fat: string,
    saturated_fat:string,
    sodium: string,
    net_carbs: string,
    sugars: string,
    dietary_fiber: string,
    total_carbs: string,
  }
}

export type {
  ButtonProps,
  TextProps,
  CardLocationProps,
  CardMenuProps,
  CardBenefitProps,
  HeaderProps,
  ListFooterProps,
  CardFavoriteProps,
};
