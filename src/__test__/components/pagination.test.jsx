import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Pagination from '../../components/pagination';

const getMountedPaginationComponent = props =>
  mount(
    <MemoryRouter>
      <Pagination {...props} />
    </MemoryRouter>
  );

describe('Pagination component', () => {
  describe('when there is a single page', () => {
    const numPages = 1;
    const currentPageNumber = 0;
    const wrapper = getMountedPaginationComponent({
      numPages,
      currentPageNumber,
    });

    it('renders a single button for the active page', () => {
      const buttonWrapper = wrapper.find(Button);
      expect(buttonWrapper).toHaveLength(1);
      expect(buttonWrapper.prop('to')).toEqual(
        `/songs/page/${currentPageNumber}`
      );
      expect(buttonWrapper.prop('color')).toEqual('secondary');
    });

    it('does not render any next or previous page buttons', () => {
      const prevPageLinkwrapper = wrapper.find('PrevPageLink');
      const nextPageLinkwrapper = wrapper.find('NextPageLink');

      expect(prevPageLinkwrapper.html()).toBeNull();
      expect(nextPageLinkwrapper.html()).toBeNull();
    });
  });

  describe('when there are multiple pages', () => {
    const numPages = 5;

    describe('and the current page is the first one', () => {
      const currentPageNumber = 0;
      const wrapper = getMountedPaginationComponent({
        numPages,
        currentPageNumber,
      });

      it('renders n + 1 buttons', () => {
        const buttonsWrapper = wrapper.find(Button);
        expect(buttonsWrapper).toHaveLength(numPages + 1);

        const pageLinksWrapper = wrapper.find('PageLink');
        expect(pageLinksWrapper).toHaveLength(numPages);

        const prevPageLinkwrapper = wrapper.find('PrevPageLink');
        expect(prevPageLinkwrapper.html()).toBeNull();

        const nextPageLinkWrapper = wrapper.find('NextPageLink');
        expect(nextPageLinkWrapper.html()).not.toBeNull();
      });
    });

    describe('and the current page is the last one', () => {
      const currentPageNumber = 4;
      const wrapper = getMountedPaginationComponent({
        numPages,
        currentPageNumber,
      });

      it('renders 1 + n buttons', () => {
        const buttonsWrapper = wrapper.find(Button);
        expect(buttonsWrapper).toHaveLength(numPages + 1);

        const pageLinksWrapper = wrapper.find('PageLink');
        expect(pageLinksWrapper).toHaveLength(numPages);

        const prevPageLinkwrapper = wrapper.find('PrevPageLink');
        expect(prevPageLinkwrapper.html()).not.toBeNull();

        const nextPageLinkWrapper = wrapper.find('NextPageLink');
        expect(nextPageLinkWrapper.html()).toBeNull();
      });
    });

    describe('and the current page is not the first nor the last one', () => {
      const currentPageNumber = 3;
      const wrapper = getMountedPaginationComponent({
        numPages,
        currentPageNumber,
      });

      it('renders 1 + n + 1 buttons', () => {
        const buttonsWrapper = wrapper.find(Button);
        expect(buttonsWrapper).toHaveLength(numPages + 2);

        const pageLinksWrapper = wrapper.find('PageLink');
        expect(pageLinksWrapper).toHaveLength(numPages);

        const prevPageLinkwrapper = wrapper.find('PrevPageLink');
        expect(prevPageLinkwrapper.html()).not.toBeNull();

        const nextPageLinkWrapper = wrapper.find('NextPageLink');
        expect(nextPageLinkWrapper.html()).not.toBeNull();
      });

      it('includes the correct text and link in the number buttons', () => {
        const pageLinksWrapper = wrapper.find('PageLink');

        pageLinksWrapper.forEach((pageLink, i) => {
          expect(pageLink.text()).toEqual((i + 1).toString());
          const buttonWrapper = pageLink.find(Button);
          expect(buttonWrapper.prop('to')).toEqual(`/songs/page/${i}`);
        });
      });

      it('defines the right color depending on the current page', () => {
        const pageLinksWrapper = wrapper.find('PageLink');
        const lastPageLinkButton = pageLinksWrapper
          .at(currentPageNumber)
          .find(Button);

        expect(lastPageLinkButton.prop('color')).toEqual('secondary');

        const previousPageLinksButtons = pageLinksWrapper
          .slice(0, currentPageNumber)
          .find(Button);

        previousPageLinksButtons.forEach(pageLinkButton => {
          expect(pageLinkButton.prop('color')).toEqual('primary');
        });

        const nextPageLinksButtons = pageLinksWrapper
          .slice(currentPageNumber + 1)
          .find(Button);

        nextPageLinksButtons.forEach(pageLinkButton => {
          expect(pageLinkButton.prop('color')).toEqual('primary');
        });
      });
    });
  });
});
