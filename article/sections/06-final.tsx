import { Aside, Section } from "reacticle";

export function SectionFinal() {
  return (
    <Section index="06" title="最终怎么选">
      <ul>
        <li><strong>选大红光：</strong>面部、肩颈、关节、局部深层、APP调参和固定安装空间。</li>
        <li><strong>选能量毯：</strong>全身覆盖、腰腹双腿、颈部护理、操作简单和便携收纳。</li>
        <li><strong>选组合：</strong>既需要局部重点护理，又需要每天躺下完成全身放松。</li>
      </ul>
      <Aside tone="principle" label="结论">
        大红光解决“局部和深层”，能量毯解决“全身和便利”。先选使用方式，再比较参数。
      </Aside>
    </Section>
  );
}