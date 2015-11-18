module AddImage
  def add_image(name, extension)
    image_tag("opere/#{name}.#{extension}",  srcset: "opere/#{name}.#{extension} 1x, opere/#{name}-@2x.#{extension} 2x, opere/#{name}-@3x.#{extension} 3x", alt: "#{name}")
  end
end
