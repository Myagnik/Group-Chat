Dev Setup
git clone 
bundle install
if error installing nio4r
-> gem install nio4r -v '2.5.8' --source 'https://rubygems.org/' -- --with-cflags="-Wno-error=implicit-function-declaration -Wno-error=incompatible-function-pointer-types"

if error installing msgpack
-> gem install msgpack -v '1.4.2' -- --with-cflags=-Wno-error=incompatible-function-pointer-types



