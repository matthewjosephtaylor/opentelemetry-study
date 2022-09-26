(async () => {
  try {
    // setup OpenTelemetry and autoinstrumentation
    const { setupOpenTelemetry } = await import("./setupOpenTelemetry");
    await setupOpenTelemetry();

    // main application entrypoint
    const { main } = await import("./main");
    main();
  } catch (reason) {
    console.error(reason);
  }
})();
