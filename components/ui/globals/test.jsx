import { cn } from '@/lib/utils';

const baseStyles = {
  h1: 'font-[conthrax] font-semibold text-[28px] sm:text-[36px] md:text-[68px] lg:text-[68px] leading-tight md:leading-[124%] tracking-[-0.02em] bg-[radial-gradient(98%_522.28%_at_2%_13.3%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.45)_100%)] bg-clip-text text-transparent mb-4 sm:mb-6',
  h2: "!text-center mx-auto font-anek-latin font-bold text-[28px] leading-[32px] md:text-[52px] md:leading-[56px] text-[#0E091F] mb-4",
  h3: 'font-inter text-[#383247] text-[16px] md:text-[18px] leading-[20px] md:leading-[24px]',
  h4: 'font-inter text-[#696969] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]',
  h5: 'font-inter text-[#242424] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-bold mb-2 md:mb-3',
  h6: 'font-sculpin text-sm sm:text-base tracking-tight text-black',
  p: 'font-anek text-[14px] leading-[24px] text-desc mb-4',
  p_guiest: "font-guiest text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] sm:leading-[30px] md:leading-[32px] max-w-[600px] mb-6 sm:mb-8 text-[#FFFFFF94]",
  span: 'font-sculpin text-sm',
  div: 'font-sculpin text-base text-black',
};

// map custom tags to real valid HTML tags
const tagMap = {
  p_guiest: 'p',
};

function Text({ as = 'p', className, children, ...props }) {
  const Tag = tagMap[as] || as; // convert custom -> real HTML tag

  return (
    <Tag {...props} className={cn(baseStyles[as] || "", className)}>
      {children}
    </Tag>
  );
}

export default Text;
