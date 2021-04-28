import {
   addClass,
   removeClass
} from './utils-class';

const modalTriggers = document.getElementsByClassName('modal-trigger');
const modalWrapperClassName = 'fixed inset-0 bg-black opacity-35';
for (let i = 0; i < modalTriggers.length; i++) {
   const e = modalTriggers[i];

   e.addEventListener('click', function () {
      console.log('ok');
      const modalWrapper = document.createElement('div');
      const modalOverlay = document.createElement('div');

      modalOverlay.addEventListener('click', function () {
         modalWrapper.remove();
      });

      addClass(modalWrapper, 'fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen');

      addClass(modalOverlay, modalWrapperClassName);
      const modalContent = document.createElement('div');
      modalContent.innerHTML = e.attributes?.["data-content"].value;
      addClass(modalContent, 'bg-white p-0 md:p-6 z-10');
      modalWrapper.append(modalOverlay);
      modalWrapper.append(modalContent);
      document.body.append(modalWrapper);
   });
}