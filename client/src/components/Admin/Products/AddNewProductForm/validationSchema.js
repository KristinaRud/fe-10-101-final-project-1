import * as Yup from "yup";

export const validationSchema = (allCategories, products, params) => {
  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name is too short - should be 2 chars minimum."),
    currentPrice: Yup.number()
      .required("Price is required")
      .min(0, "Price is too short - should be 0 chars minimum."),
    previousPrice: Yup.number()
      .required("Price is required")
      .min(0, "Price is too short - should be 0 chars minimum.")
      .moreThan(
        Yup.ref("currentPrice"),
        "Previous price should be greater than current price.",
      ),
    itemNo: Yup.string()
      .required("Article is required")
      .min(2, "Article is too short - should be 2 chars minimum.")
      .test(
        "unique-item-number",
        "Item number should be unique.",
        function (value) {
          if (!params?.product) {
            if (Object.keys(products).length > 0) {
              return !products.products.some(
                (product) => product.itemNo === value,
              );
            }
          }
          return true;
        },
      ),
    categories: Yup.string()
      .required("Category is required")
      .test("category-exists", "Category doesn't exist.", function (value) {
        if (allCategories.length > 0) {
          return allCategories.some((category) => category.id === value);
        }
        return true;
      }),
    quantity: Yup.number()
      .required("Quantity is required")
      .min(0, "Quantity is too short - should be 0 chars minimum."),
    color: Yup.string()
      .required("Color is required")
      .min(2, "Color is too short - should be 2 chars minimum."),
    brand: Yup.string()
      .required("Brand is required")
      .min(2, "Brand is too short - should be 2 chars minimum."),
    manufacturer: Yup.string()
      .required("Manufacturer is required")
      .min(2, "Manufacturer is too short - should be 2 chars minimum."),
    manufacturerCountry: Yup.string()
      .required("Manufacturer country is required")
      .min(2, "Manufacturer country is too short - should be 2 chars minimum."),
    rating: Yup.number()
      .required("Rating is required")
      .min(0, "Rating is too short - should be 0 chars minimum.")
      .max(5, "Rating is too long - should be 5 chars maximum."),
    shortDescription: Yup.string()
      .required("Short description is required")
      .min(2, "Short description is too short - should be 2 chars minimum."),
    imageUrls: Yup.array()
      .required("Image is required")
      .min(1, "Image is too short - should be 1 chars minimum."),
    description: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required("Title is required"),
          image: Yup.string().required("Image is required"),
        }),
      )
      .required("Description is required")
      .min(1, "Description is too short - should be 1 item minimum."),
    completeSet: Yup.array()
      .required("Complete set is required")
      .min(1, "Complete set is too short - should be 1 item minimum."),
  });
};
