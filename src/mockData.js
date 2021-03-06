const flexboxData = [{
  "property": "flex-direction: row",
  "correctAnswer": "https://i.imgur.com/Xo1MD86.png",
  "answers": ["https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/Id0kLlR.png"],
  "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row organizes the items from left to right.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "flex-direction: column",
  "correctAnswer": "https://i.imgur.com/JIJHnVf.png",
  "answers": ["https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/VdZUG9d.png"],
  "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using Column organizes the items from top to bottom.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "flex-direction: row-reverse",
  "correctAnswer": "https://i.imgur.com/Id0kLlR.png",
  "answers": ["https://i.imgur.com/Id0kLlR.png", "https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/Xo1MD86.png"],
  "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row reverse organizes the items from right to left.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "flex-direction: column-reverse",
  "correctAnswer": "https://i.imgur.com/VdZUG9d.png",
  "answers": ["https://i.imgur.com/VdZUG9d.png", "https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/4y9cZDw.png"],
  "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using column reverse organizes the items from bottom to top.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "flex-wrap: no-wrap",
  "correctAnswer": "https://i.imgur.com/T3rkSzF.png",
  "answers": ["https://i.imgur.com/T3rkSzF.png", "https://i.imgur.com/b9CPTJs.png", "https://i.imgur.com/mQzfZ3n.png", "https://i.imgur.com/JIJHnVf.png"],
  "info": "By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. No wrap means all items will be on one line.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "flex-wrap: wrap",
  "correctAnswer": "https://i.imgur.com/b9CPTJs.png",
  "answers": ["https://i.imgur.com/b9CPTJs.png", "https://i.imgur.com/T3rkSzF.png", "https://i.imgur.com/mQzfZ3n.png", "https://i.imgur.com/JIJHnVf.png"],
  "info": "By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. With wrap flex items will wrap onto multiple lines, from top to bottom.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "flex-wrap: wrap-reverse",
  "correctAnswer": "https://i.imgur.com/mQzfZ3n.png",
  "answers": ["https://i.imgur.com/mQzfZ3n.png", "https://i.imgur.com/T3rkSzF.png", "https://i.imgur.com/b9CPTJs.png", "https://i.imgur.com/JIJHnVf.png"],
  "info": "By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. With wrap-reverse flex items will wrap onto multiple lines from bottom to top.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "justify-content: flex-start",
  "correctAnswer": "https://i.imgur.com/irGUri3.png",
  "answers": ["https://i.imgur.com/irGUri3.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/diRO5NH.png", "https://i.imgur.com/tIf2JCm.png"],
  "info": "This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. When you use flex-start items are packed toward the start line.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "justify-content: flex-end",
  "correctAnswer": "https://i.imgur.com/4y9cZDw.png",
  "answers": ["https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/irGUri3.png", "https://i.imgur.com/diRO5NH.png", "https://i.imgur.com/x30QEEE.png"],
  "info": "This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. When you use flex-end items are packed toward the end line.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "justify-content: center",
  "correctAnswer": "https://i.imgur.com/diRO5NH.png",
  "answers": ["https://i.imgur.com/diRO5NH.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/irGUri3.png", "https://i.imgur.com/x30QEEE.png"],
  "info": "This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. When you use center items are centered along the line.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "justify-content: space-between",
  "correctAnswer": "https://i.imgur.com/x30QEEE.png",
  "answers": ["https://i.imgur.com/x30QEEE.png", "https://i.imgur.com/irGUri3.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/tIf2JCm.png"],
  "info": "This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. When you use space-between items are evenly distributed along the line with the first item on the start line and the last item on the end line.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "justify-content: space-around",
  "correctAnswer": "https://i.imgur.com/tIf2JCm.png",
  "answers": ["https://i.imgur.com/tIf2JCm.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/diRO5NH.png", "https://i.imgur.com/x30QEEE.png"],
  "info": "This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. When you use space-around items are evenly distributed along the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "justify-content: space-evenly",
  "correctAnswer": "https://i.imgur.com/tIf2JCm.png",
  "answers": ["https://i.imgur.com/tIf2JCm.png", "https://i.imgur.com/x30QEEE.png", "https://i.imgur.com/tIf2JCm.png", "https://i.imgur.com/irGUri3.png"],
  "info": "This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. When you use space-evenly  items are distributed so that the spacing between any two items (and the space to the edges) is equal..",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-items: flex-start",
  "correctAnswer": "https://i.imgur.com/wG3sXfv.png",
  "answers": ["https://i.imgur.com/jwQ4wSd.png", "https://i.imgur.com/aqGjnBq.png", "https://i.imgur.com/lLOSTyE.png"],
  "info": "This defines the default behavior for how flex items are laid out along the cross axis on the current line. Using flex-start will align the cross-start margin edge of the items is placed on the cross-start line.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-items: flex-end",
  "correctAnswer": "https://i.imgur.com/jwQ4wSd.png",
  "answers": ["https://i.imgur.com/jwQ4wSd.png", "https://i.imgur.com/wG3sXfv.png", "https://i.imgur.com/2vbrxxs.png", "https://i.imgur.com/aqGjnBq.png"],
  "info": "This defines the default behavior for how flex items are laid out along the cross axis on the current line. Using flex-end will align the cross-end margin edge of the items is placed on the cross-end line.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-items: center",
  "correctAnswer": "https://i.imgur.com/aqGjnBq.png",
  "answers": ["https://i.imgur.com/aqGjnBq.png", "https://i.imgur.com/wG3sXfv.png", "https://i.imgur.com/jwQ4wSd.png", "https://i.imgur.com/2vbrxxs.png"],
  "info": "This defines the default behavior for how flex items are laid out along the cross axis on the current line. Using center will center items in the cross-axis.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-items: stretch",
  "correctAnswer": "https://i.imgur.com/2vbrxxs.png",
  "answers": ["https://i.imgur.com/2vbrxxs.png", "https://i.imgur.com/aqGjnBq.png", "https://i.imgur.com/wG3sXfv.png", "https://i.imgur.com/lLOSTyE.png"],
  "info": "This defines the default behavior for how flex items are laid out along the cross axis on the current line. When you use stretch, your items will stretch to fill the container. Note: Specific heights will over-ride stretch",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-items: baseline",
  "correctAnswer": "https://i.imgur.com/lLOSTyE.png",
  "answers": ["https://i.imgur.com/lLOSTyE.png", "https://i.imgur.com/wG3sXfv.png", "https://i.imgur.com/aqGjnBq.png", "https://i.imgur.com/jwQ4wSd.png"],
  "info": "This defines the default behavior for how flex items are laid out along the cross axis on the current line. When you use baseline, your items are aligned such as their baselines align.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-content: flex-start",
  "correctAnswer": "https://i.imgur.com/LDWGOm6.png",
  "answers": ["https://i.imgur.com/LDWGOm6.png", "https://i.imgur.com/FRwBgsu.png", "https://i.imgur.com/WyfHi6D.png", "https://i.imgur.com/LV6tkjy.png"],
  "info": "This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Using flex-start pushes your lines to the start of the container. Note: this property has no effect when there is only one line of flex items.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-content: flex-end",
  "correctAnswer": "https://i.imgur.com/FRwBgsu.png",
  "answers": ["https://i.imgur.com/FRwBgsu.png", "https://i.imgur.com/LDWGOm6.png", "https://i.imgur.com/mwOL8UU.png", "https://i.imgur.com/UWvwKca.png"],
  "info": "This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Using flex-end pushes your lines to the end of the container. Note: this property has no effect when there is only one line of flex items.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-content: center",
  "correctAnswer": "https://i.imgur.com/WyfHi6D.png",
  "answers": ["https://i.imgur.com/WyfHi6D.png", "https://i.imgur.com/FRwBgsu.png", "https://i.imgur.com/LV6tkjy.png", "https://i.imgur.com/LDWGOm6.png"],
  "info": "This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Using center packs your lines to the center of the container. Note: this property has no effect when there is only one line of flex items.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-content: space-between",
  "correctAnswer": "https://i.imgur.com/LV6tkjy.png",
  "answers": ["https://i.imgur.com/LV6tkjy.png", "https://i.imgur.com/WyfHi6D.png", "https://i.imgur.com/mwOL8UU.png", "https://i.imgur.com/FRwBgsu.png"],
  "info": "This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Using space-between evenly distributes with the first line at the start of the container while the last one is at the end. Note: this property has no effect when there is only one line of flex items.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-content: space-around",
  "correctAnswer": "https://i.imgur.com/mwOL8UU.png",
  "answers": ["https://i.imgur.com/mwOL8UU.png", "https://i.imgur.com/UWvwKca.png", "https://i.imgur.com/UWvwKca.png", "https://i.imgur.com/LV6tkjy.png"],
  "info": "This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Using space-around evenly distributes your lines with equal space around each line. Note: this property has no effect when there is only one line of flex items.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "align-content: stretch",
  "correctAnswer": "https://i.imgur.com/UWvwKca.png",
  "answers": ["https://i.imgur.com/UWvwKca.png", "https://i.imgur.com/mwOL8UU.png", "https://i.imgur.com/WyfHi6D.png", "https://i.imgur.com/LDWGOm6.png"],
  "info": "This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Using stretch will stretch your lines to take up the remaining space. Note: this property has no effect when there is only one line of flex items. Specific heights will over-ride stretch.",
  "family-member": "Parent",
  "model": "Flexbox"
},
{
  "property": "order: <integer>",
  "correctAnswer": "https://i.imgur.com/OQXwgGo.png",
  "answers": ["https://i.imgur.com/OQXwgGo.png", "https://i.imgur.com/tMNZuBu.png", "https://i.imgur.com/k8o3I51.png", "https://i.imgur.com/Y4KmclT.png"],
  "info": "By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.",
  "family-member": "Child",
  "model": "Flexbox"
},
{
  "property": "flex-grow: <number>",
  "correctAnswer": "https://i.imgur.com/tMNZuBu.png",
  "answers": ["https://i.imgur.com/tMNZuBu.png", "https://i.imgur.com/OQXwgGo.png", "https://i.imgur.com/EWMExs2.png", "https://i.imgur.com/JHG2zvj.png"],
  "info": "This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up. If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).",
  "family-member": "Child",
  "model": "Flexbox"
},
{
  "property": "flex-shrink: <number>",
  "correctAnswer": "https://i.imgur.com/k8o3I51.png",
  "answers": ["https://i.imgur.com/k8o3I51.png", "https://i.imgur.com/tMNZuBu.png", "https://i.imgur.com/OQXwgGo.png", "https://i.imgur.com/Y4KmclT.png"],
  "info": "This defines the ability for a flex item to shrink if necessary.",
  "family-member": "Child",
  "model": "Flexbox"
},
{
  "property": "align-self: flex-start",
  "correctAnswer": "https://i.imgur.com/Y4KmclT.png",
  "answers": ["https://i.imgur.com/Y4KmclT.png", "https://i.imgur.com/OQXwgGo.png", "https://i.imgur.com/JHG2zvj.png", "https://i.imgur.com/tMNZuBu.png"],
  "info": "This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Using flex start will align the item at the start of the container.",
  "family-member": "Child",
  "model": "Flexbox"
},
{
  "property": "align-self: flex-end",
  "correctAnswer": "https://i.imgur.com/JHG2zvj.png",
  "answers": ["https://i.imgur.com/JHG2zvj.png", "https://i.imgur.com/Y4KmclT.png", "https://i.imgur.com/OQXwgGo.png", "https://i.imgur.com/EWMExs2.png"],
  "info": "This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Using flex end will align the item at the end of the container.",
  "family-member": "Child",
  "model": "Flexbox"
},
{
  "property": "align-self: center",
  "correctAnswer": "https://i.imgur.com/EWMExs2.png",
  "answers": ["https://i.imgur.com/EWMExs2.png", "https://i.imgur.com/Y4KmclT.png", "https://i.imgur.com/OQXwgGo.png", "https://i.imgur.com/KP563vf.png"],
  "info": "This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Using center will center the item in your container.",
  "family-member": "Child",
  "model": "Flexbox"
},
{
  "property": "align-self: stretch",
  "correctAnswer": "https://i.imgur.com/KP563vf.png",
  "answers": ["https://i.imgur.com/KP563vf.png", "https://i.imgur.com/JHG2zvj.png", "https://i.imgur.com/EWMExs2.png", "https://i.imgur.com/JHG2zvj.png"],
  "info": "This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Using stretch will stretch the item to fill your container. Note: A specific heights will over-ride stretch.",
  "family-member": "Child",
  "model": "Flexbox"
}]

module.exports = {flexboxData}; 