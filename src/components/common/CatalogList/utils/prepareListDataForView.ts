import { ITEMS_LIST } from "../../../../constants/data";
import { Store } from "../../../../store/store";
import { CatalogItem } from "../../../../types/types";

export const prepareListDataForView = (
  selectedCategories: Store["selectedCategories"],
  search: Store["search"],
  page: Store["page"]
): [
  CatalogItem[],
  {
    isLastPage: boolean;
  }
] => {
  const selectedCategoriesAmount = Object.keys(selectedCategories).length;
  const currentVisibleItemsAmount = page * 8;

  if (!search && !selectedCategoriesAmount)
    return [
      ITEMS_LIST.slice(0, currentVisibleItemsAmount),
      {
        isLastPage: currentVisibleItemsAmount >= ITEMS_LIST.length,
      },
    ];

  const list = ITEMS_LIST.filter(({ name, categoryId, subCategoryId }) => {
    return (
      (search ? name.toLowerCase().includes(search.toLowerCase()) : true) &&
      (selectedCategoriesAmount
        ? subCategoryId
          ? !!selectedCategories[categoryId]?.[subCategoryId]
          : !!selectedCategories[categoryId]
        : true)
    );
  });

  return [
    list.slice(0, currentVisibleItemsAmount),
    {
      isLastPage: currentVisibleItemsAmount >= list.length,
    },
  ];
};
