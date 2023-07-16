export default {
/**
   * @description Get todo by id
   * @route GET todos/:id
   */
details: (
    { params, response }: { params: { id: string }; response: any },
  ) => {
    response.body = {
      success: true,
      data: params,
    };
  }
}